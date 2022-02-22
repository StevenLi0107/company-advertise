import AboutPattern from "../../assets/about/about_color_pattern.svg";
import AboutRectangle1 from "../../assets/about/about_rectangle_1.svg";
import AboutRectangle2 from "../../assets/about/about_rectangle_2.svg";
import AboutRectangle3 from "../../assets/about/about_rectangle_3.svg";
import AboutRectangle4 from "../../assets/about/about_rectangle_4.svg";
import AboutLargeEcllipse from "../../assets/about/large_ecllipse.svg";
import AboutSmallEcllipse from "../../assets/about/small_ecllipse.svg";

import "./styles.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header-effect">
        <img
          className="about-large-ecllipse"
          src={AboutLargeEcllipse}
          alt="large ecllispe"
        />
        <img
          className="about-small-ecllipse"
          src={AboutSmallEcllipse}
          alt="large ecllispe"
        />
      </div>
      <div className="about-content-wrapper">
        <div className="about-height-bar"></div>
        <div className="about-header-conetent">
          <div className="about-title-wrapper">
            <span className="about-description">
              <span className="about-title">about us</span>
              <br />
              Young Minds, Experienced hands & Strong Command
            </span>
          </div>
          <div className="about-color-pattern">
            <img src={AboutPattern} alt="about pattern" />
          </div>
        </div>
        <div className="about-width-bar"></div>
        <div className="about-content-items-wrapper">
          <div className="about-content-items">
            <div className="about-content-item">
              <div className="about-content-item-content">
                <div className="about-content-item-title">Who WE are</div>
                <br /> A diverse team of skilled developers who share a common
                desire to create perfect IT solutions.{" "}
              </div>
            </div>
            <div className="about-content-item">
              <div className="about-content-item-content">
                <div className="about-content-item-title">
                  Cowork philosophy
                </div>
                <br />
                We developed our own philosophy based on three fundametal
                aspects: Focus, Idea, Passion, which helps us to overcome any
                customer’s expectations and to provide the expertise,
                experience, dedication and flexibility required to design,
                develop and support a digital product.{" "}
              </div>
            </div>
            <div className="about-content-item">
              <div className="about-content-item-content">
                <div className="about-content-item-title">How we work</div>
                <br />
                Our team is renowned for 100% sprint completion rate, on-time
                delivery and top-notch quality. If you have an idea and want to
                see the first version of your MVP as soon as possible, our
                company is what you search for.{" "}
              </div>
            </div>
          </div>
          <div className="about-content-img-wrapper">
            <div className="about-content-img">
              <img src={AboutRectangle1} alt="about rectangle" />
              <img src={AboutRectangle2} alt="about rectangle" />
              <img src={AboutRectangle3} alt="about rectangle" />
              <img src={AboutRectangle4} alt="about rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
