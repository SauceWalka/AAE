import { Link } from "react-router-dom";
import "./css/foot.css";
import fb from "./images/fb.png"
import insta from "./images/insta.png"
import logomono from "./images/logo.png"

export default function Footer() {
    return ( 
        <div>
        <section className="wholefoot">
        <section className="foot">
        <section className="company">
            <img src={logomono} width="150" height="75" />
        <section className="companyinfo">
            <h2>Andrew Arc Electric LLC.</h2>
            <h2>443-350-8335</h2>
            <h2>aarchelectric@gmail.com</h2>
            <h2>Finksburg MD, 21048</h2>
        </section>
        </section>
        </section>
        <section className="footdesc">
        <section className="center">
            <h1><b>Contact</b></h1>
            <h2><a href="mailto: johnlindemon@hbindustry.co?">Problems with Site</a></h2>
        </section>
        <section className="center">
            <h1><b>Associates Links</b></h1>
            <h2><a href="hbindustry.co" target="_blank">HBIndustry</a></h2>
        </section>
        <section className="center">
            <h1><b>Resources</b></h1>
            <h2>Graphics by <a href="hbindustry.co" target="_blank">HBIndustry</a></h2>
            <h2><Link to="/FAQ" target="_blank">
                    Frequently Asked Questions
                </Link></h2>
            <h2><a href="https://energy.maryland.gov/transportation/pages/incentives_evserebate.aspx" target="_blank">Rebate Program</a></h2>
        </section>
        <section className="center">
            <h1><b>Social</b></h1>
            <h2><a href="https://www.facebook.com" target="_blank"><img src={fb} width="40" height="40" /></a></h2>
            <h2><a href="https://www.instagram.com" target="_blank"><img src={insta} width="40" height="40" /></a></h2>
        </section>
        </section>
        </section>
    </div>
    );
}