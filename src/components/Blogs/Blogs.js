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
            <div className=" second-question p-20">
                <h3 className='text-center'>What is Semantic Tag?</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span>The nav, article, section etc are also some examples of semantic tag.The tags used in HTML5 are mainly semantic tags. Before HTML5, we would need to create a section, and then declare a lot of div inside that section. As it was difficult to find a simple div so, in HTML5 we can easily divide a HTML body into three semantic tags named header, main, and footer, and it is very easy to find an item of div using a semantic tag.</p>

            </div>

        </div>
    );
};

export default Blogs;