import datetime
import json
import os
import re
import sys
from flask import Flask, send_from_directory, request, abort
from flask_cors import CORS
import requests

app = Flask(__name__)

@app.route('/FAQ')
@app.route('/')
def serve_index():
    return send_from_directory('build', 'index.html')

def get_api_key() -> str:
    with open('api_key.txt', 'r') as inp_file:
        return inp_file.read().strip()

def get_reviews():
    print('called api!')
    API_KEY = get_api_key()
    url = f"https://places.googleapis.com/v1/places/ChIJ_xi1nnpCZo8Ryp6AOyBkHDE?fields=reviews&key={API_KEY}"
    response = requests.get(url)
    data = response.json()
    reviews = []
    if 'reviews' in data:
        review_objs = data['reviews']
        for review_obj in review_objs:
            data = {}
            if 'text' in review_obj and 'text' in review_obj['text']:
                data['review'] = review_obj['text']['text']
            if 'authorAttribution' in review_obj and 'displayName' in review_obj['authorAttribution']:
                data['author'] = review_obj['authorAttribution']['displayName']
            if 'publishTime' in review_obj:
                matches = re.findall(r'(\d{4})-(\d{2})-(\d{2})', review_obj['publishTime'])
                if len(matches) > 0:
                    match_group = matches[0]
                    year, month, day = match_group[0], match_group[1], match_group[2]
                    data['date'] = f'{month}/{day}/{year}'
            if 'rating' in review_obj:
                data['rating'] = review_obj['rating']
            reviews.append(data)
    return reviews

CACHED_DATA = []
DATA_DATE = None

@app.route('/api/reviews/getReviews', methods=['GET'])
def get_reviews_route():
    global CACHED_DATA
    global DATA_DATE
    curr_datetime = datetime.datetime.now()
    # update data every 30 minutes
    if DATA_DATE is None or (curr_datetime - DATA_DATE).total_seconds() / 60 >= 30:
        CACHED_DATA = get_reviews()
        DATA_DATE = curr_datetime
    return CACHED_DATA

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
