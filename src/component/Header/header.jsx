import "./header.css";
import logo  from '../../figma-images/images/Header-logo-img.svg'
import troggler from '../../figma-images/images/image 103.svg'
import main from '../../figma-images/images/main-Image.svg'
import dots from '../../figma-images/images/Doots-1.svg'
import dot1 from '../../figma-images/images/Doots-2.svg'
import shades1 from '../../figma-images/images/Shadow-1.svg'
import shades2 from '../../figma-images/images/Shadow-2.svg'
const Header = () => {

    return (

       
        <div>
            <div class="bg-color">
            <nav class="container navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">  <img src={logo} alt="" /> </a>
          <button class="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="  "> <img src={troggler} alt="" /> </span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-2 ">
              <li class="nav-item">
                <a class="nav-link active text-black font " aria-current="page" href="#"><u>Home</u></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-color" href="#">Case Studies </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-color" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-color" href="#"> Services </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-color" href="#"> Contact </a>
              </li>
              
            </ul>
           
              <button class=" text-white  px-5 rounded-5 btn-color p-2  " >Contact</button>
         
          </div>
        </div>
      </nav>

      
       <div class="position-relative">
            <img src={dot1} alt="" class="position-absolute top-0 end-0 imges-size mt-5 "/>
            </div>
            <br /><br />
      <div class="container">
     
        <div class="row">
            <div class="col-md-6">
                <h1 class="font-style-1 mt-5">
                The Better Way <br /> To <span class="font-color">Success</span> In <br /> Your Business
                </h1>
                <p>I seek to push the limits of creativity to create high-engaging,<br /> user-friendly, and memorable interactive experiences.</p>
                <button class=" text-white  px-4 rounded-5 btn-color p-2 " >HIRE ME</button>
                <br /><br />
               
            </div>
            <br /><br />
            
            

            <div class="col-md-6 position-relative">
           
              <img src={shades1} alt="" class="position-absolute top-0 end-50 mt-5 mx-5 px-5"/>
              <img class="img-size-1 img-fluid " src={main} alt="" />
              <img src={shades2} alt="" class="position-absolute bottom-0 end-0" />
            </div>

            <div>
                
            </div>
            
        </div>
      </div>
      <img class="image-size-2 " src={dots} alt="" />
      </div>

      <div className="bg-color">

      </div>
         
        </div>

       
    );
}

export default Header