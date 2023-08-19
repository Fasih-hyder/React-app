import "./footer.css"
import media from '../../figma-images/images/social.svg'
const Footer = () => {

    return(

        <div>
            <div className="bgs-color ">
                <br />
                <div className="container">
                    <div className="row text-white text-center">
                        <div className="col-md-1">
                            <p>
                                About     
                            </p>
                            </div>
                            <div className="col-md-1">
                            <p>
                            Services
                            </p>
                            </div>
                            <div className="col-md-1">
                                <p>
                                        Pricing
                                </p>
                            </div>
                            <div className="col-md-1">
                                <p>
                                        Plans
                                </p>
                            </div>
                            <div className="col-md-1">
                                <p>
                                        Privacy
                                </p>
                            </div>
                            <div className="col-md-1">
                                <p>
                                        ContactUs
                                </p>
                            </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={media} alt="" />
                        </div>
                        
                    <hr  />
                
                    </div>
                </div>
                
                <div className="container">
                    <div className="row text-white text-center">
                    <div class="col-md-3 ">
                        <br />
                      <h5>Products </h5>
                         <br />
                        <p>
                        Primary blocks   
                        </p>
                        <p>
                        Content block
                        </p>
                        <p>
                        Infographic blocks
                        </p>
                        <p>
                        Business blocks
                        </p>
                         </div>

                         <div className="col-md-2">
                            <br />
                            <h5>
                            Resources
                            </h5>
                            <br />
                            <p>
                            Support center
                            </p>
                            <p>
                            Documentation
                            </p>
                            <p>
                            Newsletter
                            </p>
                            <p>
                            Chanelog
                            </p>
                         </div>

                         <div className="col-md-2">
                            <br />
                            <h5>
                            Follow us
                            </h5>
                            <br />
                            <p>
                            Twitter
                            </p>
                            <p>
                            Dribble 
                            </p>
                            <p>
                            Facebook 
                            </p>
                            <p>
                            Linkedin
                            </p>

                         </div>

                         <div className="col-md-2">

                         </div>

                         <div className="col-md-3">
                            <p>
                            Contact
                            </p>
                            
                            <p>
                            New York. 112 W <br /> 34th St, Manhattan <br /> (1) 212-445-4320
                            </p>

                         </div>
                    


                    </div>
                </div>
                <div className="text-white">
                    <hr />
                </div>
                <div className="container">
                    <hr />
                    <div className="row text-white text-center">
                        <div className="col-md-6">
                            <p>
                            Sways by keydesign. All Rights Reserved
                            </p>
                        </div>

                        <div className="col-md-3">
                            <p>
                            Terms of Use Privacy Policy
                            </p>
                        </div>
                        <div className="col-md-3">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer