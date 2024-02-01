import { Link } from "react-router-dom";
import "./css/foot.css";
import fb from "./images/fb.png"
import insta from "./images/insta.png"
import logomono from "./images/logo.png"

export default function Footer() {
    return ( 
        <div>
        <section class="wholefoot">
        <section class="foot">
        <section class="company">
            <img src={logomono} width="150" height="75" />
        <section class="companyinfo">
            <h2>Company Name (please change)</h2>
            <h2>xxx-xxx-xxxx (please change)</h2>
            <h2>company@email.com (please change)</h2>
        </section>
        </section>
        </section>
        <section class="footdesc">
        <section class="center">
            <h1><b>Contact</b></h1>
            <h2><a href="mailto: johnlindemon@hbindustry.co?">Problems with Site</a></h2>
        </section>
        <section class="center">
            <h1><b>Associates Links</b></h1>
            <h2><a href="hbindustry.co">HBIndustry</a></h2>
        </section>
        <section class="center">
            <h1><b>Resources</b></h1>
            <h2>Graphics by <a href="hbindustry.co">HBIndustry</a></h2>
            <h2><Link to="/FAQ">
                    Frequently Asked Questions
                </Link></h2>  
        </section>
        <section class="center">
            <h1><b>Social</b></h1>
            <h2><a href="https://www.facebook.com"><img src={fb} width="40" height="40" /></a></h2>
            <h2><a href="https://www.instagram.com"><img src={insta} width="40" height="40" /></a></h2>
        </section>
        </section>
        </section>
    </div>
    );
}