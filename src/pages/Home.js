import "./css/home.css"
import Footer from "./Footer.js"
import TCert from "./images/TeslaCert2.png"
import Slider from "./Slider.js"


export default function Home() {
    return <div>
        <section class="fullpage">
                <section class="image_top">
                <section class="head_top">   
                    <section class="title">
                            <h2><strong>Andrews Ark<br/>Electric LLC.</strong></h2>
                        <section class="certs">
                            <img src={TCert} width="210" height="135"/>
                            <img src={"https://live.staticflickr.com/65535/53611360881_f6a08a60d2_n.jpg"} width="262.5" height="135"/>
                        </section>
                    </section>
                    <section class="contact_space">
                        <section class="contact">
                            <h2><b>Contact</b></h2>
                            <h3>Jonathan Andrews</h3>
                            <h3>443-350-8335</h3>
                            <h3>aarchelectric@gmail.com</h3>
                            <h3>Finksburg, MD 21048</h3>
                        </section>
                    </section> 
                </section>
                </section>
            <section id="Projects" class="projects_title">
                <h2>Completed Projects</h2>
            </section>
            <section class="projects">
                <section class="outer_box">
                    <section class="img_slider"><Slider /></section>
                </section>
            </section>
            <section class="learn_back">
            <section class="learn">
                <section id="Learn" class="learn_title"><h2>Learn About Products</h2></section>
                <section class="learn_contents">
                    <section class="learn_vidoes">
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/koRS2G5o3ek?si=l2iodu8OmCYhHosK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AigKe_7uWUw?si=gOdxfMpa_Tm8GGZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xd57G5xIjl4?si=TsRfFK2NrvcMfyGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                    </section>
                    <section class="learn_questions">
                        <section class="q"><h2>What is Tesla's<br/> Powerwall?</h2></section>
                        <section class="q"><h2>What is Tesla's<br/> wall connector?</h2></section>
                        <section class="q"><h2>What is <br/>span?</h2></section>
                    </section>
                </section>
            </section>
            </section>
            <section id="Future" class="future_title"><h2>What We Do</h2></section>
            <section class="future">
                <section class="future1">
                    <h2>What do we want to add here?</h2>
                </section>
                <section class="future1">
                    <h2>What do we want to add here?</h2>
                </section>
            </section>
            <section class="shadow-pop-header">
            <section class="review">
                <section id="Reviews" class="review_title"><h2>Reviews</h2></section>
                <section class="review_content"><h2>Need python backend</h2></section>
            </section>
            </section>
            <section class="reach_out">
                <section class="b1_box">
                    <h2>Looking for a quote?</h2>
                    <button class="b1"><a href="mailto:aarchelectric@gmailcom">aarchelectric@gmail.com</a></button>
                </section>
            </section>
        </section>
        <Footer />
    </div>

}