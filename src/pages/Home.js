import "./css/home.css"
import Footer from "./Footer.js"
import Qmark from "./images/Qmark.jpg"
import headQmark from "./images/headQmark.jpg"

export default function Home() {
    return <div>
        <section class="fullpage">
            <section class="shadow-pop-header">
            <section class="header">
                <section class="head_top">
                    <section class="head_top1">
                        <section><img src={headQmark} width="250" height="150"/></section>
                    </section>
                    <section class="head_top2">
                        <h2>Andrew ARC Electric LLC.</h2>
                    </section>
                    <section class="head_top1">
                        <section><h2>All wanted contant info</h2></section>
                    </section>
                </section>
                <section class="head_bot">    
                    <section class="head_bot_header">
                        <h2>Our Certifications</h2>
                    </section>    
                    <section class="head_bot_bot">
                        <section><h2>Tesla: XXXXXXXXX</h2></section>
                        <section><h2>Span: XXXXXXXXX</h2></section>
                        <section><h2>Electric: XXXXXXXXX</h2></section>
                    </section>
                </section>
            </section>
            </section>
            <section class="projects_title">
                <h2>Projects Completed</h2>
            </section>
            <section class="projects">
                <section class="outer_box">
                    <section class="img_slider"><img src={Qmark} width="800" height="400"/></section>
                    <section class="inner_box">
                        <h2>Description for your projects</h2>
                    </section>
                </section>
            </section>
            <section class="learn">
                <section class="learn_title"><h2>Learn</h2></section>
                <section class="learn_contents">
                    <section class="learn_vidoes">
                        <section class="video_content"><img src={Qmark} width="500" height="275"/></section>
                        <section class="video_content"><img src={Qmark} width="500" height="275"/></section>
                    </section>
                    <section class="learn_questions">
                        <section class="q"><h2>What is a Tesla Powerwall?</h2></section>
                        <section class="q"><h2>What is Span Certification?</h2></section>
                        <section class="q"><h2>How does this all work?</h2></section>
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
            <section class="review">
                <section class="review_title"><h2>Reviews</h2></section>
                <section class="review_content"><h2>Need python backend</h2></section>
            </section>
            <section class="reach_out">
                <section class="b1_box">
                    <h2>Who refered you?</h2>
                    <button class="b1" src="google.com">Fill out our referral<br></br>sheet!!</button>
                </section>
                <section class="b1_box">
                    <h2>Looking for a quote?</h2>
                    <button class="b1" src="google.com">Get one now!!</button>
                </section>
            </section>
        </section>
        <Footer />
    </div>

}