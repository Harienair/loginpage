import React  from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
<div>
<div className="main_area">

<header className="header_section">
<div className="container-fluid">
  <nav className="navbar navbar-expand-lg custom_nav-container">
    <a className="navbar-brand" href="index.html">
      <span>
        KSDIAN
      </span>
    </a>

    <div className="navbar-collapse" id="">
      <div className="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/log">
              <img src="/design/image/login.png" alt="" />
              <span>Login</span></Link>
          </li>
          <br />
          <li className="nav-item">
           <Link to="/reg">
              <img src="/design/image/signup.png"  alt=""/>
              <span>Sign Up</span>
              </Link>
          </li>
        </ul>
        <form className="form-inline my-2 mb-3 mb-lg-0 mr-5">
          <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
        </form>
      </div>

      <div className="custom_menu-btn">
        <button onclick="openNavigation()">
          <span className="s-1">

          </span>
          <span className="s-2">

          </span>
          <span className="s-3">

          </span>
        </button>
      </div>
      <div id="myNav" className="overlay">
        <a href="index.html" className="closebtn" onclick="closeNav()">&times;</a> 
        <div className="overlay-content">
          <a href="index.html">HOME</a>
          <a href="index.html">TEAM</a>
          <a href="index.html">PORTFOLIO</a>

          <a href="index.html">CONTACT US</a>

        </div>
      </div>
    </div>
  </nav>
</div>
    </header>

    <section className=" slider_section ">

<div id="carousel-begins" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel-begins" data-slide-to="0" className="active">01</li>
    <li data-target="#carousel-begins" data-slide-to="1">02</li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-3 offset-md-2">
          <div className="slider_detail">
            <h1>
              INNOVATIVE
              <span>
                SOLUTIONS
              </span>
            </h1>
            <p>
              We find the best solutions for you, we redesign your home and work places.
              Discover why over 5,100 home owners trust initiative
            </p>
            <div>
              <a href="index.html">
                Find More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="slider_img-box">
            <img src="/design/image/slider-img.png"  alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-3 offset-md-2">
          <div className="slider_detail">
            <h1>
              INNOVATIVE
              <span>
                SOLUTIONS
              </span>
            </h1>
            <p>
              We find the best solutions for you, we redesign your home and work places.
              Discover why over 5,100 home owners trust initiative
            </p>
            <div>
              <a href="index.html">
                Find More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="slider_img-box">
            <img src="/design/image/slider-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="carousel_btn-container">
    <a className="carousel-control-prev" href="#carousel-begins" role="button" data-slide="prev">
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-begins" role="button" data-slide="next">
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

    </section>

</div>


<section className="company layout-padding" >
<div className="container">
  <h1 >WHY INITIATIVE COMPANY</h1>
  <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
</div>
<div className="container">
<div className="row layout-padding">
 <div className="about-column col-md-4"  >
  <div className="card text-center"  style={{width: "300", height:"auto"}}>
    <div className="card-body">
      <img src="/design/image/card-img-1.png" className="card-img-top" alt=""/>
      <h3 className="card-title">10 YEARS EXPERIENCE</h3>
      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>

    </div>
    
  </div>  
  
 <button className="btn btn-lg btn-block " type="button">Read More</button>
</div>

<div className="about-column col-md-4" >
  <div className="card text-center"  style={{width: "300", height:"auto"}}>
    <div className="card-body">
      <img src="/design/image/card-img-2.png" className="card-img-top" alt=""/>
      <h3 className="card-title">A PRO ARCHITECTS TEAM</h3>
      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
     
    </div>
  </div>
  <button className="btn btn-lg btn-block " type="button">Read More</button>
</div>


<div className="about-column col-md-4"  >
  <div className="card text-center"  style={{width: "300", height:"auto"}}>
    <div className="card-body">
      <img src="/design/image/card-img-3.png" className="card-img-top" alt=""/>
      <h3 className="card-title">1000+ HAPPY CUSTOMERS</h3>
      <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
     
    </div>
   
  </div>
  <button className="btn btn-lg btn-block " type="button">Read More</button>
</div>

</div> 





</div>
</section>

<section  className="port layout-padding" >
<div className="container">
<h1>OUR PORTFOLIO</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
</div>
<div className="container layout-padding">
<div className="row ">
<div className=" col-md-8">
  <div className="port-image-box">
    <img   src="/design/image/portfolio-img-1.png" alt="" />
  </div>
</div>
<div className=" col-md-4">
  <div className="port-image-box">
   <img  src="/design/image/portfolio-img-2.jpg" alt=""/>
  </div>
  </div>
<div className=" col-md-4">
  <div className="port-image-box">
    <img src="/design/image/portfolio-img-3.png"  alt=""/>
  </div>
</div>
<div className=" col-md-8" >
  <div className="port-image-box">
    <img   src="/design/image/portfolio-img-4.png" alt=""/> 
  </div>
</div>
</div>
</div>
</section>

<section className="ourteam layout-padding" >
    <div className="container">
        <h2>OUR TEAM</h2>
        <p>It is a long established fact that a reader will be distracted by the readable</p>
    </div>
    <div className="container layout-padding " >
        <div className="row">
            <div className="col-sm-3">
                <div className="card-main">
                    <div className="card-body">
                        <img src="/design/image/team-1.png" className="team-img" alt=""/><br /><br/>
                        <h5>JOHN DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div className="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt="" />
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-sm-3">
                <div className="card-main">
                    <div className="card-body">
                        <img src="/design/image/team-2.png" className="team-img" alt=""/><br/><br/>
                        <h5>SANDY DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div className="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt=""/>
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card-main">
                    <div className="card-body">
                        <img src="/design/image/team-3.png" className="team-img" alt=""/><br/><br/>
                        <h5>ALEXI DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div className="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt=""/>
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card-main">
                    <div className="card-body">
                        <img src="/design/image/team-4.png" className="team-img" alt=""/><br/><br/>
                        <h5>JOHN DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div className="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt="" />
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt="" />
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>  
</section>

<hr className="middhr" />

<section className="register layout-padding">
<div className="container text-center">
<p>Don’t Hesitate To Ask</p>
<h2>FREE CONSULTATION</h2>
</div>
<div className="container layout-padding">
<div className="row">
<div className="col-md-6">
  <form action="/">
    <div className="regform-container">
      <div>
        <div>
          <label>name
            <input type="text" />
          </label>
        </div>
        <div>
          <label>email
            <input type="email" />
          </label>
        </div>
        <div>
          <label>phone number
            <input type="text" />
          </label>
        </div>
        <div>
          <label>message
            <textarea cols="30" rows="10"></textarea>
          </label>
        </div>
        <div>
          <button className="btn1" type="submit">Send</button>
        </div>
      </div>
    </div>
  </form>
</div>
<div className="col-md-6">
  <div className="reg-img">
      <img src="/design/image/form-img.png" alt="" />

  </div>
</div>
</div>
</div>
</section>

<section className="chooseus layout-padding">
<div className="container ">
<h2 className="layout-padding">WHY CHOOSE US?</h2>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
</div>

</section>






<section className="layout-padding">
    <div>
        <div className="form">
            <h1>signup Here</h1>
            <div className="sign-form ">
                <form action="signup.js" method="POST"  >
                    <label> Name
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label><br/>

                    <label>Username
                        <input type="text" name="uname" />
                    </label><br/>
                    <label>password
                        <input type="password" name="pword" />
                    </label><br/>

                    <button type="submit" onclick=""> Register</button>
                </form>

            </div>
    
        </div>
    </div>
</section>

</div>

    );
    
}

export default Home;