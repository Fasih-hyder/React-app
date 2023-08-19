import "./services.css";
import stylish from "../../figma-images/images/section-4-main-img.svg"
import pic1 from "../../figma-images/images/img-1.svg"
import pic2 from "../../figma-images/images/img-2.svg"
import pic3 from "../../figma-images/images/img-3.svg"
import pic4 from "../../figma-images/images/img-4.svg"
import din1 from "../../figma-images/images/points-2.svg"
import din2 from "../../figma-images/images/points-1.svg"
import girl from "../../figma-images/images/Ellipse 12.svg"
import emoji from "../../figma-images/images/in-love 1.svg"
const creative = () => {

    return(

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mt-5">
                        Peed Of Creative <br /> Service For Your <br /> Business Growth
                        </h1>
                        <p>
                        We recruit doctors with the best honors and graduates at their <br /> universities, with a very broad and extraordinary experience <br /> they grow into professional doctors
                        </p>
                        <p>
                        then received extraordinary supplies, guided for 2 years, they <br /> already understand very well about existing diseases and how <br /> to handle them properly
                        </p>
                    </div>

                    <div className="col-md-6">
                     <img  src= {stylish} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <br /><br />
                  <div className="container">
                  <h1 className="mt-5">
             Our Impressive Portfolio
             </h1>
             <p>
             We believe scaling startups require a radically different kind of agency
             </p>
                  </div>

                  <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 ">
                        <img  src= {pic1} alt="" className="img-fluid" />
                        <h1 className="text-center mt-5">
                        Website Design
                        </h1>
                        </div>
                        
                        
                        <div className="col-md-6 ">
                            <img  src={pic2} alt="" className="img-fluid pic-size" />
                            <h1 className="text-center mt-5">
                            Dashboard Design
                        </h1>
                        </div>
                        
                        
                    </div>

                  </div>
                  <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                        <img  src= {pic3} alt="" className="img-fluid" />

                        <h1 className="text-center mt-5">
                        Gallery Item
                        </h1>
                        </div>
                        
                        
                        <div className="col-md-6">
                            <img  src={pic4} alt="" className="img-fluid pic-size" />
                            <h1 className="text-center mt-5">
                            Mock Up Design
                        </h1>
                        </div>
                        
                        
                    </div>
                  </div>
                    <div className="bg-color-1">
                    <div class="position-relative">
            <img src={din1} alt="" class="position-absolute top-0 end-0 img-fluid img-size merg"/>
            </div>
            <br /><br />
                <h1 className="text-center marg">
                Our Testimonial
                </h1>
                <p className="text-center ">
                We believe scaling startups require a radically different kind of agency
                </p>
                
            <br /><br /><br />
            <div className="container">
                <div className="row margins ">
                    <div className="col-md-4  cards  ">
                        <div className="d-flex ">
                            <img className="mb-3" src={girl} alt="" />
                            <p className="px-3">
                            The experts easily identified the <br /> wand guided us through the <br /> creation of the c.
                            </p>
                            
                        </div>

                        <div className="d-flex paddings ">
                        <p class="fw-bold">
                            I love Sway
                            </p>
                            <img className="mb-3" src={emoji} alt="" />
                        </div>
                        <div className="container ">
                            <hr />
                        </div>
                        <div className="d-flex paddings">
                            <h6 >
                             <span className="text-style">Vincent Smith </span>CEO at Ritmo
                            </h6>
                            
                        </div>
                    </div>
                    <div className="col-md-4 cards  ">
                        <div className="d-flex ">
                            <img className="mb-3" src={girl} alt="" />
                            <p className="px-3">
                            The experts easily identified the <br /> wand guided us through the <br /> creation of the c.
                            </p>
                            
                        </div>

                        <div className="d-flex paddings">
                        <p class="fw-bold">
                            I love Sway
                            </p>
                            <img className="mb-3" src={emoji} alt="" />
                        </div>
                        <div className="container ">
                            <hr />
                        </div>
                        <div className="d-flex paddings">
                            <h6 >
                             <span className="text-style">Vincent Smith </span>CEO at Ritmo
                            </h6>
                            
                        </div>
                    </div>

                    <div className="col-md-4 cards  ">
                        <div className="d-flex  ">
                            <img className="mb-3" src={girl} alt="" />
                            <p className="px-3">
                            The experts easily identified the <br /> wand guided us through the <br /> creation of the c.
                            </p>
                            
                        </div>

                        <div className="d-flex paddings">
                        <p class="fw-bold">
                            I love Sway
                            </p>
                            <img className="mb-3" src={emoji} alt="" />
                        </div>
                        <div className="container ">
                            <hr />
                        </div>
                        <div className="d-flex paddings">
                            <h6 >
                             <span className="text-style">Vincent Smith </span>CEO at Ritmo
                            </h6>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div >
            <img src={din2} alt="" />
            </div>
            </div>
           <div className="bg-color-2 text-center  ">
            <br /><br />
            <p className="text-white  ">
            WE CUSTOM BUILD WEBSITES TO MAKE YOUR BRAND STAND OUT FROM THE NOISE
            </p>
            <br />
            <h1 className="text-white ">
            We start by listening and let that shape our <br /> design process, with our clients as partners
            </h1>
            <br />
            <button class=" btn-color-2 p-2 px-4" >Contact Us</button>
            <br /><br /><br /><br /> 
           </div>
        </div>
    );
}

export default creative