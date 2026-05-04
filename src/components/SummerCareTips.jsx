import React from 'react';

const SummerCareTips = () => {
    return (
        <section className="px-6 pb-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Stay Fresh & Protected
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
            Summer Care Tips
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Simple tips to keep your skin, body, and eyes protected during hot summer days.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-orange-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-950">Use Sunscreen</h3>
            <p className="mt-3 text-gray-700">
              Apply sunscreen before going outside to protect your skin from harsh UV rays.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-950">Stay Hydrated</h3>
            <p className="mt-3 text-gray-700">
              Drink enough water throughout the day to keep your body cool and refreshed.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-950">Wear Sunglasses</h3>
            <p className="mt-3 text-gray-700">
              Protect your eyes with UV protection sunglasses during sunny summer outings.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SummerCareTips;