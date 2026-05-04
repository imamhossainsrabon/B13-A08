import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {
    console.log(product)
    return (
        <div className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
             <Image
                src={product.image}
                alt={product.name}
                className="h-56 w-full rounded-xl object-cover aspect-square "
                width={1000}
                height={1000}
              />

              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-950">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between text-base font-semibold">
                  <p className="text-yellow-500">⭐ {product.rating}</p>
                  <p className="text-orange-500">${product.price}</p>
                </div>

                <button
                  type="button"
                  className="cursor-pointer mt-5 w-full rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  View Details
                </button>
              </div>
        </div>
    );
};

export default ProductCard;