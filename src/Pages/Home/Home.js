import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [loading] = useAuthState(auth);

    // if(loading){
    //     return;
    // }
    return (
        <div>
            <div>
                <Banner></Banner>
                <Inventory></Inventory>

                <div className='mt-5 container border'>
                    <h1 className='mt-3 text-center display-6 fw-bold'>Our Testimonials</h1>
                    <h6 className='text-danger text-center'>WHAT OUR HAPPY CLIENTS SAY ABOUT US</h6>
                    <div className='d-flex mt-5 shadow-lg bg-body rounded'>
                        <img src="https://i.ibb.co/G0rFfnV/review-item-img01.jpg" alt="" />
                        <div className='mx-5'>
                            <h4>Lawrence C. Anderson</h4>
                            <p>I called and emailed Car Leader and I got a fast response. They took the time to walk me through the process. Most of the work was done over the phone and through email. They pre-approved me before coming in. Sales rep John Smith was kind and courteous and listened to my needs. It seemed like it was very important to him that I got in the right vehicle.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-5 shadow-lg bg-body rounded'>
                        <div className='mx-5'>
                            <h4 className='text-end'>Thomas Catalano</h4>
                            <p>I called and emailed Car Leader and I got a fast response. They took the time to walk me through the process. Most of the work was done over the phone and through email. They pre-approved me before coming in. Sales rep John Smith was kind and courteous and listened to my needs. It seemed like it was very important to him that I got in the right vehicle.</p>
                        </div>
                        <img src="https://i.ibb.co/2ssSjsY/review-item-img02.jpg" alt="" />
                    </div>
                    <div className='d-flex mt-5 shadow-lg bg-body rounded'>
                        <img src="https://i.ibb.co/7t127t6/review-item-img03.jpg" alt="" />
                        <div className='mx-5'>
                            <h4>Thomas E. Watkins</h4>
                            <p>I called and emailed Car Leader and I got a fast response. They took the time to walk me through the process. Most of the work was done over the phone and through email. They pre-approved me before coming in. Sales rep John Smith was kind and courteous and listened to my needs. It seemed like it was very important to him that I got in the right vehicle.</p>
                        </div>
                    </div>
                    <div className='d-flex mt-5 shadow-lg bg-body rounded'>
                        <div className='mx-5'>
                            <h4 className='text-end'>Woodrow J. Augustus</h4>
                            <p>Salesperson was very professional, helpful and friendly. Went above and beyond to make sure we were completely satisfied before leaving the lot. Made the car buying experience easy and pleasant.</p>
                        </div>
                        <img src="https://i.ibb.co/T4RjYSL/review-item-img04.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;