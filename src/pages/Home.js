import "./css/home.css"
import Footer from "./Footer.js"
import TCert from "./images/TeslaCert2.png"
import TCert2 from "./images/SPAN cert (I made).png"
import Slider from "./Slider.js"


export default function Home() {
    return <div>
        <div class="image_top">
            <div class="head_top">   
                <div class="title">
                    <div class="title_content">
                        <h2><b>Andrews Ark<br />Electric LLC.</b></h2>
                        <p>8 years experience with Tesla products,<br/>and 2 years experience with span products</p>
                    </div>
                    <div class="certs">
                        <div class="cert1">
                            <img src={TCert} width="200" height="125"/>
                        </div>
                        <div class="cert2">
                            <img src={TCert2} width="200" height="125"/>
                        </div>
                    </div>
                </div>
                <div class="contact_space">
                    <div class="contact">
                        <h2><b>Contact</b></h2>
                        <h3>Jonathan Andrews</h3>
                        <h3>443-350-8335</h3>
                        <h3>aarchelectric@gmail.com</h3>
                        <h3>Finksburg, MD 21048</h3>
                    </div>
                </div> 
            </div>
        </div>
        <div id="Projects" class="projects_title">
            <h2>Completed Projects</h2>
        </div>
        <div class="projects">
            <div class="outer_box">
                <div class="img_slider"><Slider /></div>
            </div>
        </div>
        <div class="learn_back">
        <div class="learn">
            <div id="Learn" class="learn_title"><h2>Learn About Products</h2></div>
            <div class="learn_contents">
                <div class="learn_questions">
                    <div class="q"><h2>What is Tesla's<br/>Powerwall?</h2></div>
                    <div class="q"><h2>What is Tesla's<br/>wall connector?</h2></div>
                    <div class="q"><h2>What is<br/>span?</h2></div>
                </div>
                <div class="learn_vidoes">
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/koRS2G5o3ek?si=l2iodu8OmCYhHosK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AigKe_7uWUw?si=gOdxfMpa_Tm8GGZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xd57G5xIjl4?si=TsRfFK2NrvcMfyGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                </div>
            </div>
        </div>
        </div>
        <div id="Future" class="future_title"><h2>What We Do</h2></div>
        <div class="future">
            <h2>Andrews Ark Electric: Your Trusted Partner for Tesla and SPAN Products<br/>
                Quality Installation Services at Affordable Prices</h2>
            <div class="shadow-drop-center">
            <div class="future_top">
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
            <div class="shadow-drop-center">
            <div class="future_middle">
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
            <div class="shadow-drop-center">
            </div>
            <div class="add_services">
                <p>Additional Services</p>
                <div class="services">
                <h2 id="a" class="serv_items">Ground mount and<br/>solar roof top systems</h2>
                <h2 id="b" class="serv_items">Main service upgrade<br/>and sub-panels</h2>
                <h2 id="c" class="serv_items">New home wiring<br/>and basement additions</h2>
                <h2 id="d" class="serv_items">Solar panel maintenance<br/>and upgrade</h2>
            </div>
            </div>
            <div class="future_bottom">
                <p>If you are interested in learning more about Andrews Ark Electric and how we can help
                    you with your Tesla and SPAN products and installation services, please contact us today.
                    We will be happy to answer any questions you may have and schedule a consultation.
                    We look forward to hearing from you and working with you on your next project.</p>
            </div>   
        </div>
        <div class="review">
            <div id="Reviews" class="review_title"><h2>Reviews</h2></div>
            <div class="review_content"><h2>Need python backend</h2></div>
        </div>
        <div class="reach_out">
            <div class="b1_box">
                <h2>Looking for a quote?</h2>
                <p class="b1"><a href="mailto:aarchelectric@gmailcom">Email</a></p>
                <p class="b1"><a href="tel:4433508335">Call</a></p>
            </div>
        </div>
    <Footer />
    </div>
}