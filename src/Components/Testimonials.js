import React from "react";
import "./Testimonials.css";
import Netflix from "../assets/Netflix.png";
import Aha from "../assets/Aha.png";
import DisneyHotstar from "../assets/DisneyHotstar.png";
import Mb from "../assets/Mb.png";
import PrimeVideo from "../assets/PrimeVideo.png";
import SonyLiv from "../assets/SonyLiv.png";
import SunNxt from "../assets/SunNxt.png";
import Toi from "../assets/Toi.png";
import Voot from "../assets/Voot.png";
import Z from "../assets/Z.png";
import Zee5 from "../assets/Zee5.png";
import Byjus from "../assets/Byjus.png";

function Testimonials() {
  return (
    <div className="testimonials_section">
      <div className="testimonials_title">Why choose SubSpace?</div>
      <div className="testimonials_subtitle">
        2000+ businesses trust their payments with SubSpace
      </div>
      <div className="partners_image_wrapper">
        <img className="partner_image" src={Netflix} alt="Netflix" />
        <img className="partner_image" src={Aha} alt="Aha" />
        <img className="partner_image" src={Byjus} alt="Byjus" />
        <img
          className="partner_image"
          src={DisneyHotstar}
          alt="DisneyHotstar"
        />
        <img className="partner_image" src={Mb} alt="Mb" />
        <img className="partner_image" src={PrimeVideo} alt="PrimeVideo" />
        <img className="partner_image" src={SonyLiv} alt="SonyLiv" />
        <img className="partner_image" src={SunNxt} alt="SunNxt" />
        <img className="partner_image" src={Toi} alt="Toi" />
        <img className="partner_image" src={Voot} alt="Voot" />
        <img className="partner_image" src={Z} alt="Z" />
        <img className="partner_image" src={Zee5} alt="Zee5" />
      </div>
      <div className="testimonial_footer">
          Need Help? We are just a click away. <b className="contact_us">Contact Us</b>
      </div>
    </div>
  );
}

export default Testimonials;
