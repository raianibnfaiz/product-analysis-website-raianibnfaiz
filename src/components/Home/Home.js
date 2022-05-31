import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Reviews></Reviews>
            <Link to='/review' element={<Reviews></Reviews>}>
                <button class="bg-transparent hover:bg-pink-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    More Review
                </button>
            </Link>

        </div>
    );
};

export default Home;