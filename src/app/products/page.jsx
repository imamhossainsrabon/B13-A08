

import ProductCard from '@/components/ProductCard';

const ProductsPage = async() => {

    const res = await fetch("https://b13-a08-gules.vercel.app/data.json")
    const products = await res.json();
    console.log(products, "products")

    
    return (
        <div className='px-6 my-10 py-12 sm:px-10 lg:px-0'>
            <div className='mx-auto max-w-7xl'>
                <h2 className='text-3xl font-extrabold text-gray-950 sm:text-4xl'>Popular Products</h2>
            <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {products.map(product =>  <ProductCard key={product.id} product={product} />)}
            </div>
            </div>
        </div>
    );
};

export default ProductsPage;