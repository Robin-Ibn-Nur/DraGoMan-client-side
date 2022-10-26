import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 my-10">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog about cors, firebase, private route & Node.JS</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline"> what is cors?</summary>
                        <div className="px-4 pb-4">
                            <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <div className="px-4 pb-4">
                            <p>Firebase is a NoSQL database that is used for mobile and web apps, provided by Google. There are many useful features in Firebase such as user authentication and a realtime database.</p>
                            <p>Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents. A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn't logged in they're redirected to the /login page, if the user is logged in but aren't in an authorised role they're redirected to the home page.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Node? How does Node work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Node.js is a JavaScript runtime that runs on top of Google's open-source JavaScript engine called V8. Pairing JavaScript's naturally event-driven, asynchronous coding style with non-blocking I/O libraries makes Node.js fast, lightweight, and efficient. This newly updated Refcard introduces Node, explains how it works, and dives into its architecture.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;