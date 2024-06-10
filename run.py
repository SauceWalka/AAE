import datetime
import json
import os
import sys
from flask import Flask, send_from_directory, request, abort
from flask_cors import CORS

config_data = {
    "backend_port": "3001",
}

backend_port = int(config_data['backend_port'])
            
app = Flask(__name__)

@app.route('/FAQ')
@app.route('/')
def serve_index():
    return send_from_directory('build', 'index.html')

reviews_path = os.path.join(os.path.dirname(__file__), 'reviews.json')

def get_reviews():
    if not os.path.exists(reviews_path):
        return []
    with open(reviews_path, 'r') as reviews_file:
        return json.load(reviews_file)

@app.route('/api/reviews/getReviews', methods=['GET'])
def get_reviews_route():
    return get_reviews()

@app.route('/api/reviews/add', methods=['POST'])
def add_review():
    date = datetime.datetime.now().strftime('%m/%d/%Y')
    data = request.get_json()
    name = str(data['name'])
    message = str(data['review'])
    rating = int(data['rating'])
    curr_reviews = get_reviews()
    if len(name) <= 100 and len(message) <= 3000 and rating >= 0 and rating <= 5 and len(name) >= 5:
        curr_reviews.append({ 'date': date, 'name': name, 'message': message, 'rating': rating})
        with open(reviews_path, 'w') as reviews_file:
            json.dump(curr_reviews, reviews_file, indent=4)
    return curr_reviews

@app.route('/static/js/<path:filename>')
@app.route('/static/css/<path:filename>')
@app.route('/static/media/<path:filename>')
@app.route('/<path:filename>')
def serve_file(filename):
    for curr_root, dirs, files in os.walk('build'):
        for file in files:
            if file == filename:
                return send_from_directory(curr_root, file)
    abort(404)

if __name__ == '__main__':
    is_prod = 'prod' in ''.join(sys.argv[1:]).lower()
    if not is_prod:
        CORS(app)
    app.run(host='0.0.0.0', port=3300)
