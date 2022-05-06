import React from 'react';
import './Banner.css'

const Carousel = () => {
    return (
        <div>
            <div className="bg-dark text-white text-center">
                <img src="https://i.ibb.co/NjLdjpV/slide-01.jpg" className="card-img w-100" alt="..." />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div>
                  <h4 className='display-5'>Shop Cars For Sale</h4>
                    <h1 className="card-text fw-bold display-3">HUGE DISCOUNT</h1>
                    <h1 className="card-text fw-bold display-3">UP TO <span className='text-danger'>25%</span></h1>
                    <p className="card-text display-6">COMPLETE HAPPINESS</p>
                  </div>
                  {/* <div className='d-flex justify-content-end bg-danger' style={{width:"300px", height: "300px"}}>
                      
                  </div> */}
                </div>
            </div>
        </div>
    );
};

export default Carousel;