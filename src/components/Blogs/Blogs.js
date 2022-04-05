import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h3 className='text-3xl'>What is Context API? </h3>
                <p>The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application.Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they're passing state to their components. Instead of installing a state management library in our project that will eventually cost our project performance and increase our bundle size, we can easily go with Context API and be fine with it.One of the concepts of React is to break our application into components, for reusability purposes. So in a simple React application, we have a few different components. As our application grows, these components can become huge and unmaintainable, so we break them into smaller components.Context API is a very useful react element.</p>
            </div>
            <div>
                <h3 className='text-3xl'>What is Semantic Tag?</h3>
                <p >Semantic HTML tags allow us to add meaning to our markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads our content it doesn't understand the context and meaning. Semantic HTML tags let us serve structured content to our users, which is especially important for on-page SEO and accessibility.Semantic HTML tags allow us to add meaning to our markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads our content it doesn't understand the context and meaning. Semantic HTML tags let us serve structured content to our users, which is especially important for on-page SEO and accessibility.</p>
            </div>
        </div>
    );
};

export default Blogs;