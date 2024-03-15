import "./css/home.css"
import Footer from "./Footer.js"
import TCert from "./images/TeslaCert.PNG"
import Slider from "./Slider.js"

export default function Home() {
    return <div>
        <section class="fullpage">
            <section class="shadow-pop-header">
            <section class="header">
                <section class="head_top">
                    <section class="head_top2">
                        <section classname="head_top2_title">
                            <p><strong>Andrews Ark<br/>Electric LLC.</strong></p>
                        </section>
                        <section class="head_bot_bot">
                            <section><img src={TCert} width="140" height="90"/></section>
                            <section><h3>Span: XXXXXXXXX</h3>
                        </section>
                    </section>
                    </section>
                    <section class="head_top1">
                        <section><h2><b>Contact Me</b></h2><h3>Jonathan Andrews</h3><h3>Phone: 443-350-8335</h3><h3>Email: aarchelectric@gmail.com</h3></section>
                    </section>
                </section>
            </section>
            </section>
            <section class="projects_title">
                <h2>Projects Completed</h2>
            </section>
            <section class="projects">
                <section class="outer_box">
                    <section class="img_slider"><Slider /></section>
                    <section class="inner_box">
                        <h2>Here are some of the projects that Andrews Ark Electric has completed recently</h2>
                    </section>
                </section>
            </section>
            <section class="shadow-pop-header">
            <section class="learn">
                <section class="learn_title"><h2>Learn</h2></section>
                <section class="learn_contents">
                    <section class="learn_vidoes">
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xd57G5xIjl4?si=TsRfFK2NrvcMfyGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/koRS2G5o3ek?si=l2iodu8OmCYhHosK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                        <section><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AigKe_7uWUw?si=gOdxfMpa_Tm8GGZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
                    </section>
                    <section class="learn_questions">
                        <section class="q"><h2>What is span?</h2></section>
                        <section class="q"><h2>What is a Tesla<br/> Powerwall?</h2></section>
                        <section class="q"><h2>What is Tesla's<br/> wall connector?</h2></section>
                    </section>
                </section>
            </section>
            </section>
            <section class="future_title"><h2>Future</h2></section>
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
                <section class="review_title"><h2>Reviews</h2></section>
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