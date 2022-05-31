import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-1 '>
            <div className=" first-question  p-20">
                <h3 className='text-center'>What is Context API?</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span>The Context API is a component structure that allows us to communicate specific types of data across all layers of the application. If we utilize props drilling to transmit props from parent components to child components, certain child components would get inconsistent props, but our goal is to provide props to the targeted component without sending to all child components. As a result, context api is employed to address this issue.</p>
            </div>
            <div className=" second-question p-20">
                <h3 className='text-center'>What are the differences between block element and inline block element?</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span>The block element occupies the entire width of its parent div, whereas the inline block element occupies its own width within a div. Inline block components can be stacked one on top of the other depending on their size, however more than one block element can never be stacked on top of each other. An inline element does not start on a new line. A block-level element always starts on a new line, A block-level element always takes up the full width available.</p>

            </div>
        </div>
    );
};

export default Blogs;