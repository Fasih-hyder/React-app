import "./trusted.css";
import niky from '../../figma-images/images/Nike 2.svg'
import spotify from '../../figma-images/images/Spotify 2.svg'
import googly from '../../figma-images/images/Google 2.svg'
import Iphone from '../../figma-images/images/Apple 2.svg'
import amozany from '../../figma-images/images/Amazon2 2.svg'
import airy from '../../figma-images/images/Airbnb 2.svg'
import Takeaway from '../../figma-images/images/section-2-main-img.svg'
import prize from '../../figma-images/images/easy to purchase.svg'
import stratr from '../../figma-images/images/Strategy.svg'
import webpage from '../../figma-images/images/Agency-Web.svg'

const Section = () => {
    return (


        <div>
            <div class="S-2-Bg-Color">

                <h6 class="text-center mt-5">Trusted by the world's best companies</h6>
                <div class="container">
                    <div class="row mt-3 text-center ">

                        <div class="col-md-2">
                            <img src={niky} alt="" />
                        </div>

                        <div class="col-md-2 company-p">
                            <img src={spotify} alt="" />
                        </div>

                        <div class="col-md-2">
                            <img src={googly} alt="" />
                        </div>

                        <div class="col-md-2 company-p">
                            <img src={Iphone} alt="" />
                        </div>

                        <div class="col-md-2">
                            <img src={amozany} alt="" />
                        </div>

                        <div class="col-md-2 company-p">
                            <img src={airy} alt="" />
                        </div>

                    </div>
                </div>
                <div class="container">
                    <div class="row mt-5 mb-5">

                        <div class="col-md-6 mb-5">
                            <img class=" img-fluid" src={Takeaway} alt="" />
                        </div>

                        <div class="col-md-6">
                            <h1 class="mt-5">
                                Let your visitors know <br /> about your features.
                            </h1>
                            <p class="mt-3">
                                We develop enjoyable consumer experiences, from <br />digital strategy and content to media and analysis. <br /> Leading to meaningful results and satisfied clients.
                            </p>
                            <button class=" text-white  px-4 rounded-5 btn-color2 p-2 " >Our Process</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-3-bg-color  ">
                <br />
                <h1 class="text-center font-s3  ">
                    I want company feature
                </h1>
                <p class="text-center font-s3-1">
                    We believe scaling startups require a radically different kind of agency
                </p>
                <div class="container">
                    <div class="row mb-5   ">

                        <div class="col-md-4 bg-s3-img  ">
                            <div className="text-center">
                                <img class="" src={prize} alt="" />
                                <h5 class="fw-bold mt-4">
                                    Easy to purchase
                                </h5>
                                <p class="font-size-s3">
                                    A complete set of tools to enable marketing teams to curate,
                                    personalize, contextualize, send, integrate and track campaigns - no coding required.
                                </p>
                            </div>

                        </div>

                            
                        <div class="col-md-4">
                            <div className="text-center company-width bg-s3-col">
                            <img class="" src={stratr} alt="" />
                            <h5 class="fw-bold  text-white mt-3">
                            Strategy
                                </h5>
                                <p class="font-size-s3 text-white">
                                    A complete set of tools to enable marketing teams to curate,
                                    personalize, contextualize, send, integrate and track campaigns - no coding required.
                                </p>
                            </div>
                                
                            


                        </div>
                            

                        <div class="col-md-4 bg-s3-img  ">
                            <div className="text-center">
                                <img class="" src={webpage} alt="" />
                                <h5 class="fw-bold  mt-4">
                                Agency Web
                                </h5>
                                <p class="font-size-s3">
                                    A complete set of tools to enable marketing teams to curate,
                                    personalize, contextualize, send, integrate and track campaigns - no coding required.
                                </p>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Section