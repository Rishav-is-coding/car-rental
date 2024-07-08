import { IconMail, IconPhoneCall, IconBrandInstagram} from "@tabler/icons-react";
import { Link } from "react-router-dom";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>RK</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect vehicle to meet your needs.
              </li>
              <li>
                <a href="tel:8638870746">
                  <IconPhoneCall /> &nbsp; 8638870746
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                info@rk-rental.com"
                >
                  <IconMail />
                  &nbsp; info@rk-rental.com 
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rk.rentals_/" target="_blank"
                >
                  <IconBrandInstagram/>
                  &nbsp; Instagram
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="https://maps.app.goo.gl/B1LDXo3vbV6FgbEj7" target="_blank"><span>Guwahati</span><p>Palash Path, Nabin Nagar, Guwahati, Assam</p></a>
              </li>
              <br></br>
              <li>
              <Link to="/models" onClick={scrollToTop}>
                  Pricing Plans &nbsp; 
                </Link>
              </li>
              <li>
                <a href="#home">Refunds/Cancellations</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sat: 9:00AM - 9:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
