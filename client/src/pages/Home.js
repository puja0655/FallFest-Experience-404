import React,{Component} from 'react';
class Homie extends Component{
      render(){

          return(
              <div>
                  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo mr-auto">
   {/*    <a href="index.html"><img src="assets/img/majorlogo.png" alt="" class="col-6"/></a>  */}
        <h1 class="glow"><a href="index.html"/><span>Invest-E-Neur</span></h1>


         
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="/premium">Pricing</a></li>
         {/*  <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="/#">Drop Down 1</a></li>
              <li class="drop-down"><a href="/#">Drop Down 2</a>
                <ul>
                  <li><a href="/#">Deep Drop Down 1</a></li>
                  <li><a href="/#">Deep Drop Down 2</a></li>
                  <li><a href="/#">Deep Drop Down 3</a></li>
                  <li><a href="/#">Deep Drop Down 4</a></li>
                  <li><a href="/#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/#">Drop Down 3</a></li>
              <li><a href="/#">Drop Down 4</a></li>
              <li><a href="/#">Drop Down 5</a></li>
            </ul>
          </li> */}
          <li><a href="#contact">Contact</a></li>

          <li class="get-started"><a href="/port ">Companies</a></li>
        </ul>
      </nav>

    </div>
  </header>
                   
  
                   <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">Grow your business Along with perfect Investment with <br/>Invest-E-Neur</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">We are a team aiming to Connect The Best Companies with The Investors.</h2>
      <div data-aos="fade-up" data-aos-delay="800">
        <a href="/register" class="btn-get-started scrollto">Get Started</a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
      <img src="assets/img/investorent2.png" class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>

<main id="main">

<section id="clients" class="clients clients">
  <div class="container">

    <div class="row">

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-1.png" class="img-fluid" alt="" data-aos="zoom-in"/>
      </div>

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-2.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
      </div>

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
      </div>

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-4.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
      </div>

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-5.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
      </div>

      <div class="col-lg-2 col-md-4 col-6">
        <img src="assets/img/clients/client-6.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
      </div>

    </div>

  </div>
</section>

<section id="about" class="about">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>About Us</h2>
    </div>

    <div class="row content">
      <div class="col-lg-6 pagination-centered" data-aos="fade-up" data-aos-delay="150">
        <p>
          Its always been hard to connect and reflect the goals as a Entrepreneur? Or you seek to invest in The Best-est Companies? Well You are On the Right Platform Buddy!
        </p>
        <ul>
          <li><i class="ri-check-double-line"></i>1000+ happy customers till date</li>
          <li><i class="ri-check-double-line"></i> You want it,you have it!</li>
          <li><i class="ri-check-double-line"></i> The market may fluctuate,but the goal doesn't.</li>
        </ul>
      </div>
      <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
       <img src="assets/img/investorent.png" alt="" class="img-fluid"/>
        {/*<a href="/#" class="btn-learn-more">Learn More</a>*/}
      </div>
    </div>

  </div>
</section>


<section id="counts" class="counts">
  <div class="container">

    <div class="row">
      <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
        <img src="assets/img/counts-img.svg" alt="" class="img-fluid"/>
      </div>

      <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
        <div class="content d-flex flex-column justify-content-center">
          <div class="row">
            <div class="col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="icofont-simple-smile"></i>
                <span data-toggle="counter-up">1000+</span>
                <p><strong>Happy Clients</strong></p>
              </div>
            </div>

            <div class="col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="icofont-document-folder"></i>
                <span data-toggle="counter-up">5000+</span>
                <p><strong>Projects</strong> </p>
              </div>
            </div>

            <div class="col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="icofont-clock-time"></i>
                <span data-toggle="counter-up">12</span>
                <p><strong>Years of experience</strong></p>
              </div>
            </div>

            <div class="col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="icofont-award"></i>
                <span data-toggle="counter-up">15</span>
                <p><strong>Awards</strong> At National business Fairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<section id="services" class="services">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Services</h2>
     
    </div>

    <div class="row">
      <div class="col-md-12 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
          <div class="icon"><i class="fa fa-briefcase"></i></div>
          <h4 class="title"><a href="/register">Companies And Enterpreneurs</a></h4>
          <p class="description">Register your company,websites and setup the configuration.</p>
        </div>
      </div>

      <div class="col-md-12 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="fa fa-line-chart"></i></div>
          <h4 class="title"><a href="">Investors</a></h4>
          <p class="description">Compare and Analyse the best Companies worth investing for.</p>
        </div>
      </div>

     {/*  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
          <div class="icon"><i class="bx bx-tachometer"></i></div>
          <h4 class="title"><a href="">Magni Dolores</a></h4>
          <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
          <div class="icon"><i class="bx bx-world"></i></div>
          <h4 class="title"><a href="">Nemo Enim</a></h4>
          <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div> */}

    </div>

  </div>
</section>


<section id="more-services" class="more-services">
  <div class="container section-bg">

    <div class="row">
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="card" style={{'backgroundImage': 'url("assets/img/investorent4.png")'}} data-aos="fade-up" data-aos-delay="100">
          <div class="card-body">
            <h5 class="card-title"><a href="">HealthCare-Global(HCG)</a></h5>
            <p class="card-text">HealthCare Global Enterprises Ltd (HCG), India's largest provider of cancer care is at the forefront of the battle against cancer.</p>
            <div class="read-more"><a href="/#"><i class="icofont-arrow-right"></i> Read More</a></div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div class="card" style={{'backgroundImage': 'url("assets/img/investorent3.png")'}} data-aos="fade-up" data-aos-delay="200">
          <div class="card-body">
            <h5 class="card-title"><a href="">Datamatics</a></h5>
            <p class="card-text">Datamatics is a provider of consulting, information technology (IT), data management, and business process management services,Headquartered in Mumbai.</p>
            <div class="read-more"><a href="/#"><i class="icofont-arrow-right"></i> Read More</a></div>
          </div>
        </div>

      </div>
  {/*     <div class="col-md-6 d-flex align-items-stretch mt-4">
        <div class="card" style={{'backgroundImage': 'url("assets/img/more-services-3.jpg")'}} data-aos="fade-up" data-aos-delay="100">
          <div class="card-body">
            <h5 class="card-title"><a href="">Nive Lodo</a></h5>
            <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
            <div class="read-more"><a href="/#"><i class="icofont-arrow-right"></i> Read More</a></div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-stretch mt-4">
        <div class="card" style={{'backgroundImage': 'url("assets/img/more-services-4.jpg")'}} data-aos="fade-up" data-aos-delay="200">
          <div class="card-body">
            <h5 class="card-title"><a href="">Pale Treda</a></h5>
            <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
            <div class="read-more"><a href="/#"><i class="icofont-arrow-right"></i> Read More</a></div>
          </div>
        </div>
      </div> */}
    </div>

  </div>
</section>


{/* <section id="features" class="features">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Features</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
    </div>

    <div class="row" data-aos="fade-up" data-aos-delay="300">
      <div class="col-lg-3 col-md-4">
        <div class="icon-box">
          <i class="ri-store-line" style={{"color": "/#ffbb2c;"}}></i>
          <h3><a href="">Lorem Ipsum</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div class="icon-box">
          <i class="ri-bar-chart-box-line" style={{"color":" /#5578ff;"}}></i>
          <h3><a href="">Dolor Sitema</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div class="icon-box">
          <i class="ri-calendar-todo-line" style={{"color":" /#e80368;"}}></i>
          <h3><a href="">Sed perspiciatis</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
        <div class="icon-box">
          <i class="ri-paint-brush-line" style={{"color": "/#e361ff;"}}></i>
          <h3><a href="">Magni Dolores</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-database-2-line" style={{"color": "/#47aeff;"}}></i>
          <h3><a href="">Nemo Enim</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-gradienter-line" style={{"color": "/#ffa76e;"}}></i>
          <h3><a href="">Eiusmod Tempor</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-file-list-3-line" style={{"color": "/#11dbcf;"}}></i>
          <h3><a href="">Midela Teren</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-price-tag-2-line" style={{"color": "/#4233ff;"}}></i>
          <h3><a href="">Pira Neve</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-anchor-line" style={{"color":"/#b2904f;"}}></i>
          <h3><a href="">Dirada Pack</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-disc-line" style={{"color": "/#b20969;"}}></i>
          <h3><a href="">Moton Ideal</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-base-station-line" style={{"color": "/#ff5828;"}}></i>
          <h3><a href="">Verdo Park</a></h3>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
          <i class="ri-fingerprint-line" style={{"color": "/#29cc61;"}}></i>
          <h3><a href="">Flavor Nivelanda</a></h3>
        </div>
      </div>
    </div>

  </div>
</section> 
<section id="testimonials" class="testimonials section-bg">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
    </div>

    <div class="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="200">

      <div class="testimonial-wrap">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="testimonial-wrap">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
          <h3>Sara Wilsson</h3>
          <h4>Designer</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="testimonial-wrap">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
          <h3>Jena Karlis</h3>
          <h4>Store Owner</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="testimonial-wrap">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
          <h3>Matt Brandon</h3>
          <h4>Freelancer</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

      <div class="testimonial-wrap">
        <div class="testimonial-item">
          <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
          <h3>John Larson</h3>
          <h4>Entrepreneur</h4>
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>

    </div>

  </div>
</section>*/}
<section id="portfolio" class="portfolio">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
    </div>

    <div class="row" data-aos="fade-up" data-aos-delay="200">
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 2</h4>
            <p>App</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Card 2</h4>
            <p>Card</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Web 2</h4>
            <p>Web</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>App 3</h4>
            <p>App</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Card 1</h4>
            <p>Card</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Card 3</h4>
            <p>Card</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="team" class="team section-bg">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>Experience 404</p>
    </div>

    <div class="row">

      <div class="col-4 d-flex align-items-stretch">
        <div class="member" data-aos="fade-up" data-aos-delay="100">
          <div class="member-img">
            <img src="assets/img/team/puff1.png" class="img-fluid" alt=""/>
           
          </div>
          <div class="member-info">
            <h4>Riya Prasad</h4>
            <span>Team Leader and UI Developer</span>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex align-items-stretch">
        <div class="member" data-aos="fade-up" data-aos-delay="200">
          <div class="member-img">
            <img src="assets/img/team/puff1.png" class="img-fluid" alt=""/>
          
          </div>
          <div class="member-info">
            <h4>Puja Kumari</h4>
            <span>Senior Developer</span>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex align-items-stretch">
        <div class="member" data-aos="fade-up" data-aos-delay="300">
          <div class="member-img">
            <img src="assets/img/team/puff1.png" class="img-fluid" alt=""/>
          
          </div>
          <div class="member-info">
            <h4>Yashfin Sayeed</h4>
            <span>Designer and Developer</span>
          </div>
        </div>
      </div>


    </div>

  </div>
</section>
<section id="pricing" class="pricing">
  <div class="container">

    <div class="section-title">
      <h2>Pricing</h2>
      <p>Enjoy the best of both worlds</p>
    </div>

    <div class="row">

{/*       <div class="col-lg-4 col-md-6">
        <div class="box" data-aos="zoom-in-right" data-aos-delay="200">
          <h3>Free</h3>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li class="na">Pharetra massa</li>
            <li class="na">Massa ultricies mi</li>
          </ul>
          <div class="btn-wrap">
            <a href="/#" class="btn-buy">Buy Now</a>
          </div>
        </div>
      </div> */}

      <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
        <div class="box recommended" data-aos="zoom-in" data-aos-delay="100">
          <h3>Regular</h3>
          <h4><sup>₹</sup>500<span> / month</span></h4>
          <ul>
            <li>Acess to all criteria</li>
            <li>opted by most</li>
            
          </ul>
          <div class="btn-wrap">
            <a href="/premium" class="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 mt-4 mt-lg-0">
        <div class="box recommended" data-aos="zoom-in-left" data-aos-delay="200">
          <h3>Deal</h3>
          <h4><sup>₹</sup>2000<span> / month</span></h4>
          <ul>
            <li>Best deal with training opportunities</li>
            <li>Meet mentors and experienced people!</li>
            
          </ul>
          <div class="btn-wrap">
            <a href="/#" class="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
{/*    <section id="faq" class="faq">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
    </div>

    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div class="col-lg-5">
        <i class="ri-question-line"></i>
        <h4>Non consectetur a erat nam at lectus urna duis?</h4>
      </div>
      <div class="col-lg-7">
        <p>
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </p>
      </div>
    </div>

    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
      <div class="col-lg-5">
        <i class="ri-question-line"></i>
        <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
      </div>
      <div class="col-lg-7">
        <p>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
        </p>
      </div>
    </div>

    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
      <div class="col-lg-5">
        <i class="ri-question-line"></i>
        <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
      </div>
      <div class="col-lg-7">
        <p>
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
        </p>
      </div>
    </div>

    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
      <div class="col-lg-5">
        <i class="ri-question-line"></i>
        <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
      </div>
      <div class="col-lg-7">
        <p>
          Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
        </p>
      </div>
    </div>

    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">
      <div class="col-lg-5">
        <i class="ri-question-line"></i>
        <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
      </div>
      <div class="col-lg-7">
        <p>
          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
        </p>
      </div>
    </div>

  </div>
</section> */}
<section id="contact" class="contact">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h2>Contact Us</h2>
    </div>

    <div class="row">

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="contact-about">
          <h3>Invest-E-Neur</h3>
          <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          <div class="social-links">
            <a href="/#" class="twitter"><i class="icofont-twitter"></i></a>
            <a href="/#" class="facebook"><i class="icofont-facebook"></i></a>
            <a href="/#" class="instagram"><i class="icofont-instagram"></i></a>
            <a href="/#" class="linkedin"><i class="icofont-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
        <div class="info">
          <div>
            <i class="ri-map-pin-line"></i>
            <p>new rosaline<br/>IIT ISM, Dhanbad 805110</p>
          </div>

          <div>
            <i class="ri-mail-send-line"></i>
            <p>info@example.com</p>
          </div>

          <div>
            <i class="ri-phone-line"></i>
            <p>564565454</p>
          </div>

        </div>
      </div>

      <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
          <div class="form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Don't hesitate to ask!!" placeholder="Query"></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send</button></div>
        </form>
      </div>

    </div>

  </div>
</section>

</main>




<a href="/#" class="back-to-top"><i class="icofont-simple-up"></i></a>
              </div>
          )        
      }

}
export default Homie;