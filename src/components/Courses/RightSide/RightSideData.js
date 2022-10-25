import React from 'react';

const RightSideData = () => {

    return (

        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                
            </div>
        </section>


        // <div className="bg-white">
        //     <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        //         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        //         <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        //             {products.map((product) => (
        //                 <div key={product.id} className="group relative">
        //                     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        //                         <img
        //                             src={product.imageSrc}
        //                             alt={product.imageAlt}
        //                             className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        //                         />
        //                     </div>
        //                     <div className="mt-4 flex justify-between">
        //                         <div>
        //                             <h3 className="text-sm text-gray-700">
        //                                 <a href={product.href}>
        //                                     <span aria-hidden="true" className="absolute inset-0" />
        //                                     {product.name}
        //                                 </a>
        //                             </h3>
        //                             <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        //                         </div>
        //                         <p className="text-sm font-medium text-gray-900">{product.price}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default RightSideData;