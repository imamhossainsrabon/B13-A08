import React from "react";

const TopBrands = () => {
  return (
    <div>
      <section className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Trusted Choices
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Top Brands
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover popular summer brands for accessories, skincare, and
              outdoor essentials.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-black text-orange-500">
                S
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-950">SunShade</h3>
              <p className="mt-2 text-gray-600">
                Stylish UV protection sunglasses.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-black text-orange-500">
                B
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-950">
                BeachWear
              </h3>
              <p className="mt-2 text-gray-600">
                Comfortable summer fashion items.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-black text-orange-500">
                C
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-950">CoolCare</h3>
              <p className="mt-2 text-gray-600">
                Skincare products for hot days.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-black text-orange-500">
                T
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-950">
                TravelEase
              </h3>
              <p className="mt-2 text-gray-600">
                Useful bags and travel essentials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBrands;
