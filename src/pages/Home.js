import React from "react"
import "./css/home.css"
import Footer from "./Footer.js"
import TCert from "./images/TeslaCert2.png"
import TCert2 from "./images/SPAN cert (I made).png"
import Slider from "./Slider.js"

function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function StarRating({ rating, setRating, mutable}) {
    const [dataHover, setDataHover] = React.useState(false);

    const hover = (mutable !== false) && dataHover;
    const setHover = (newHover) => {
        if (mutable !== false) {
            setDataHover(newHover);
        }
    }

    const acutalSetRating = (newRating) => {
        if (mutable !== false) {
            setRating(newRating);
        }
    }

    const buttonStyles = (mutable === false) ? {} : {cursor: 'pointer'};

    return (
        <div className="star-rating">
            {[...Array(5)].map((unused, index) => {
                return (
                    <button
                        style={buttonStyles}
                        type="button"
                        key={index}
                        className={((index <= hover) || (index < rating)) ? "on" : "off"}
                        onClick={() => acutalSetRating(index + 1)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating - 1)}>
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}

const BACKEND_URL = "https://hbindustry-test.com/";

export default function Home() {

    const [reviews, setReviews] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(BACKEND_URL + '/api/reviews/getReviews');
            const reviewData = await response.json();
            setReviews(reviewData);
        }
        if (reviews === null) {
            fetchData();
        }
    }, [reviews, setReviews]);

    const reviewWidth = isMobile() ? '100%' : '25%';
    const submitReviewWidth = isMobile() ? '100%' : '50%';

    const [name, setName] = React.useState('');
    const [review, setReview] = React.useState('');
    const [rating, setRating] = React.useState(1);

    const submitReview = async () => {
        const data = { name, review, rating };
        try {
            const response = await fetch(BACKEND_URL + '/api/reviews/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            const reviewData = await response.json();
            setReviews(reviewData);
            setName('');
            setReview('');
            setRating(1);
        } catch(e) {
            console.error(e);
        }
    };

    return <div>
        <div className="image_top">
            <div className="head_top">   
                <div className="title">
                    <div className="title_content">
                        <h2><b>Andrews Ark<br />Electric LLC.</b></h2>
                        <p>8 years experience with Tesla products,<br/>and 2 years experience with span products</p>
                    </div>
                    <div className="certs">
                        <div className="cert1">
                            <img src={TCert} width="200" height="125"/>
                        </div>
                        <div className="cert2">
                            <img src={TCert2} width="200" height="125"/>
                        </div>
                    </div>
                </div>
                <div className="contact_space">
                    <div className="contact">
                        <h4><b>Contact</b></h4>
                        <h5>Jonathan Andrews</h5>
                        <h5>443-350-8335</h5>
                        <h5>aarchelectric@gmail.com</h5>
                        <h5>Finksburg, MD 21048</h5>
                    </div>
                </div> 
            </div>
        </div>
        <div id="Projects" className="projects_title">
            <h2>Completed Projects</h2>
        </div>
        <div className="projects">
            <div className="outer_box">
                <div className="img_slider"><Slider /></div>
            </div>
        </div>
        <div className="learn_back">
        <div className="learn">
            <div id="Learn" className="learn_title"><h2>Learn About Products</h2></div>
            <div className="learn_contents">
                <div className="learn_questions">
                    <div className="q"><h2>What is Tesla's<br/>Powerwall?</h2></div>
                    <div className="q"><h2>What is Tesla's<br/>wall connector?</h2></div>
                    <div className="q"><h2>What is<br/>span?</h2></div>
                </div>
                <div className="learn_vidoes">
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/koRS2G5o3ek?si=l2iodu8OmCYhHosK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AigKe_7uWUw?si=gOdxfMpa_Tm8GGZL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xd57G5xIjl4?si=TsRfFK2NrvcMfyGd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                </div>
            </div>
        </div>
        </div>
        <div id="Future" className="future_title"><h2>What We Do</h2></div>
        <div className="future">
            <h2>Andrews Ark Electric: Your Trusted Partner for Tesla and SPAN Products<br/>
                Quality Installation Services at Affordable Prices</h2>
            <p id="future_subtitle"><b>8 years experience with Tesla products, and 2 years experience with Span products</b></p>
            <div className="shadow-drop-center">
            <div className="future_top">
                <p>Are you looking for a Professional company to help with any of your 
                    Tesla and SPAN products? Would you like to benefit from clean and 
                    efficient energy solutions for your home or business? If so, you 
                    have come to the right place! Andrews Ark Electric LLC specializes 
                    in Tesla and SPAN products and installation services. We have the 
                    experience, expertise, and equipment to handle any project, big or 
                    small. Whether you need a Tesla powerwall, Tesla wall connector, a 
                    SPAN Smart Panel, or any other Tesla or SPAN products, we can install 
                    them for you with the highest quality and customer satisfaction.</p>
            </div>
            </div>
            <div className="shadow-drop-center">
            <div className="future_middle">
                <p><b>Here are some of the reasons why you should choose Andrews
                    Ark Electric for your Tesla and SPAN needs:</b></p>
                <ul>
                    <li><p>We have a loyal and satisfied customer base. We have many positive reviews and testimonials from our previous clients who have enjoyed our services and products.</p></li>
                    <li><p>We provide a warranty and a guarantee for our work. We stand behind our quality and will fix any issues that may arise within the warranty period.</p></li>
                    <li><p>We have a team of skilled and friendly technicians who will treat your property with respect and care. They will arrive on time, work efficiently, and clean up after themselves.</p></li>                        
                    <li><p>We offer competitive and transparent pricing. We will give you a free estimate and a detailed breakdown of the costs before we start the work. No hidden fees or surprises.</p></li>
                    <li><p>We are certified and authorized by Tesla and SPAN to install their products. This means we have the training and knowledge to follow their standards and specifications.</p></li>
                </ul>
            </div>
            </div>
            <div className="shadow-drop-center">
            </div>
            <div className="add_services">
                <p>Ask about our additional services, some are coming soon</p>
                <div class="services">
                {/* <h2 id="a" className="serv_items">Ground mount and<br/>solar roof top systems</h2>  */}
                <h2 id="b" className="serv_items">Main service upgrade<br/>and sub-panels</h2>
                <h2 id="c" className="serv_items">New home wiring<br/>and basement additions</h2>
                {/* <h2 id="d" className="serv_items">Solar panel maintenance<br/>and upgrade</h2> */}
            </div>
            </div>
            <div className="future_bottom">
                <p>If you are interested in learning more about Andrews Ark Electric and how we can help
                    you with your Tesla and SPAN products and installation services, please contact us today.
                    We will be happy to answer any questions you may have and schedule a consultation.
                    We look forward to hearing from you and working with you on your next project.</p>
            </div>   
        </div>
        <div className="review">
            <div id="reviewsContainer">
                {
                    reviews && reviews.map((reviewObj, index) => {
                        return (
                            <div key={index} style={{width: reviewWidth}}>
                                <div>
                                    <h3>{reviewObj.date}</h3>
                                    <h3 style={{textDecoration: 'underline'}}>{reviewObj.name}</h3>
                                    <h3>{reviewObj.message}</h3>
                                    <div className="formGroup">
                                        <StarRating rating={reviewObj.rating} setRating={() => {}} mutable={false}></StarRating>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        <div className="review" style={{position: 'relative', top: '30px'}}>
            <div id="Reviews" className="review_title"><h2>Submit a Review</h2></div>
            <div id="submitReviewsContainer">
                <div style={{width: submitReviewWidth}}>
                    <div className="formGroup">
                        <h3>Name:</h3>
                        <input type="text" style={{width: '40%'}} onChange={e => setName(e.target.value)} value={name}/>
                    </div>
                    <h3>Review</h3>
                    <textarea rows="5" style={{width: '80%'}} onChange={e => setReview(e.target.value)} value={review}/>
                    <div className="formGroup">
                        <h3>Rating:</h3>
                        <StarRating id="Stars" rating={rating} setRating={setRating}></StarRating>
                    </div>
                    <button id="submitReview" onClick={submitReview}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
        <div className="reach_out">
            <div className="b1_box">
                <h2>Looking for a quote?</h2>
                <p className="b1"><a href="mailto:aarchelectric@gmailcom">Email</a></p>
                <p className="b1"><a href="tel:4433508335">Call</a></p>
            </div>
        </div>
        <div className="add_link">
            <p className="add_link_text"><b>Click here for more info on the Electric Vehicle Supply Equipment (EVSE) Rebate Program</b></p>
            <p><a href="https://energy.maryland.gov/transportation/pages/incentives_evserebate.aspx">https://energy.maryland.gov/transportation</a></p>
        </div>
    <Footer />
    </div>
}
