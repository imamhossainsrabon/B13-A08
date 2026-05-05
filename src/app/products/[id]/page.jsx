import Image from 'next/image';
import React from 'react';

const ProductDetailsPage = async({params}) => {
    const {id} = await params
    console.log(id)
    const res = await fetch("https://b13-a08-gules.vercel.app/data.json")
    const products = await res.json();
    console.log(products, "products")

    const product  = products.find(p => p.id.toString() === id.toString())
    console.log(product, "single product")
    return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-xl my-30">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[360px] bg-gradient-to-br from-green-50 to-emerald-100 p-6">
          <div className="absolute left-6 top-6 z-10 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow">
            {product.category}
          </div>

          <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-600">
            {product.brand}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
              ⭐ {product.rating}
            </span>

            <span className="text-sm text-gray-500">
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </span>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-4xl font-bold text-gray-900">
                ${product.price}
              </p>
            </div>

            <p className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
              {product.stock} left
            </p>
          </div>

          <button
            disabled={product.stock === 0}
            className="mt-8 rounded-xl bg-green-700 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
          >
            {product.stock > 0 ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetailsPage;