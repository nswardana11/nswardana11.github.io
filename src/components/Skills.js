import uipath from "../assets/img/rpa.png";
import arduino from "../assets/img/arduino.png";
import iot from "../assets/img/iot.png";
import dbeaver from "../assets/img/dbeaver.png";
import react from "../assets/img/react.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I bring a robust skill set to the table.
                          <br></br> My track record of successfully applying these skills and demonstrates.
                          <br></br> my capability and commitment to achieving outstanding results </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={uipath} alt="Image" />
                                <h5>Robotic Process <br></br> Automation</h5>
                            </div>
                            <div className="item image-container">
                                <img src={arduino} alt="Image" />
                                <h5>Embedded Systems <br></br> Development</h5>
                            </div>
                            <div className="item">
                                <img src={iot} alt="Image" />
                                <h5>Internet <br></br> of Things</h5>
                            </div>
                            <div className="item">
                                <img src={dbeaver} alt="Image" />
                                <h5>Database <br></br> Administrator</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>Web <br></br> Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
