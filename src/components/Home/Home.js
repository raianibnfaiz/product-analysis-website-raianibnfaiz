import React from 'react';
import { Link } from 'react-router-dom';
import FirstThreeReview from '../FirstThreeReview/FirstThreeReview';
import useReview from '../hooks/useReview';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    const [review, setReview] = useReview();
    return (
        <div className="container">
            <div className="row m-6 pb-3">
                <div className="col-md-8 p-6 ">
                    <h1 className="text-justify mb-6" >Welcome To <br /> <span className="text-amber-900 ml-5">Boots Shop</span></h1>
                    <p className='text-justify p-1'>We are one of the only places you will find that still measures your feet to help ensure you get that proper fit.  We will help you find shoes to accomodate width requirements, orthotics, or braces.  The Boot Shop is a full service shoe store with a large selection of fine family footwear.  From dress to casual, athletic to slippers and safety, we have it all including accessories like insoles, polishes, laces and so much more.</p>
                </div>
                <div className=" col-md-4 p-3 ">
                    <img className='ml-1' src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vdHN8ZW58MHx8MHx8&w=1000&q=80" alt="img" />
                </div>
            </div>
            <h3 className='text-gray-600 bold'>Overall Customer Review: <span className='text-blue-400'>{review.length}</span></h3>
            <FirstThreeReview></FirstThreeReview>
            <div className="review-button mb-6">
                <Link to='/review' element={<Reviews></Reviews>}>
                    <button class="bg-orange-300 hover:bg-pink-200 text-gray-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Show All Review
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default Home;