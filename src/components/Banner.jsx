import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="rounded-none md:rounded-3xl bg-orange-50 px-6 py-12 shadow-md sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
        <div className='text-center lg:text-left'>
          <p className="mb-3 text-sm font-bold uppercase text-orange-500">
            Summer Sale 50% OFF
          </p>

          <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
            UV Protection Sunglasses
          </h1>

          <p className="mt-4 max-w-lg text-lg leading-7 text-gray-700">
            Stylish UV protection sunglasses perfect for summer outings.
          </p>

          <button
            type="button"
            className="cursor-pointer mt-7 rounded-full bg-orange-500 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-orange-600 active:scale-98"
          >
            Shop Now
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src='https://cdn.shopify.com/s/files/1/0829/0680/8560/files/5XpeP98q6R64SAQ5JokgYnew5gqPADTdjZvm7KhJ.jpg?v=1777669256'
            alt='Stylish UV protection sunglasses perfect for summer outings.'
            className="h-72 w-full max-w-md rounded-2xl object-cover shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
    );
};

export default Banner;