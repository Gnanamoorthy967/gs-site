import React from 'react';
import Product from "./Product"

const Home = () => {
  return (
    <>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/bg1.jpg" className="d-block w-100" alt="bg1" height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='text-sucess'>"Fashion that Fits, Prices that Wow!"</h1>
              <p>Discover stylish fits at prices that will amaze you.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="image/bg2.jpg" className="d-block w-100" alt="bg2" height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='text-DodgerBlue'>Shop. Slay. Repeat."</h1>
              <p >Conquer the fashion game with a cycle of shopping, slaying, and repeating.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/image/bg3.jpg" className="d-block w-100" alt="bg3" height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='text-primary' >"Style Unlimited, Prices Unbelievable!"</h1>
              <p>Embrace limitless style with unbelievably affordable prices.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/image/bg4.jpg" className="d-block w-100" alt="bg4" height="550px" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='text-danger'>"Deals That Steal the Spotlight!"</h1>
              <p>Let spotlight-worthy deals steal the show in your shopping experience.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


        {/* <section>
          <div className='newcome'>

          </div>
        </section> */}

      </div>
      <marquee>Unlock Happiness with Every Purchase!!</marquee>

      <Product />
    </>
  )
}

export default Home