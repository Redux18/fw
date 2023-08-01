import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import myimg from "../../imagii/prme.png"

const About = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Me</h1>
            </div>
            <div className="content">
              <h3>
                Hey!, I am Ankit Gupta I am a Full Stack Developer </h3>
               <p> quos animi natus beatae deleniti asperiores alias numquam porro
                corporis incidunt architecto sit itaque eos, reiciendis iste
                dolore amet vitae tempora fuga voluptatem facere quibusdam
                consequuntur blanditiis et. Maiores expedita consequuntur
                obcaecati nobis laudantium! Sunt ratione aliquid expedita, amet
                qui facilis voluptatibus labore adipisci maiores enim
                repudiandae eius cum. Sequi excepturi autem in architecto error
                explicabo quasi sunt minus eos ducimus saepe recusandae pariatur
                labore veniam doloribus quam voluptates, ipsum, illum iste atque
                laborum quisquam cumque voluptatum beatae. Consectetur, facere
                atque!

                </p>
                <div className="button">
                    Read More
                </div>
             
            </div>
            <div className="social">

          <Link to="#"><i className="topIcon fab fa-facebook-square"></i></Link>
          <Link to="#"><i className="topIcon fab fa-twitter-square"></i></Link>
          <Link to="#"> <i className="topIcon fab fa-pinterest-square"></i></Link>
          <Link to="#"> <i className="topIcon fab fa-instagram-square"></i></Link>

                {/* <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-twitter-f"></i></a>
                <a href=""><i className="fab fa-instagram-f"></i></a> */}




     
     
            </div>
          </div>
          <div className="image-section">
            {/* <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="abt" /> */}
            <img src={myimg}  alt="myimg"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
