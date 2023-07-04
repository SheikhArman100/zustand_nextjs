import Card from '../components/Card';

const Products = async() => {
    const data = await fetch("http://localhost:3200/products");
    const products = await data.json();
    
    


  return (
    <div className='flex-1 flex flex-col items-center mt-2  py-3'>
        <h1 className='text-lg font-bold'>Products</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 mx-auto sm:gap-x-8 lg:gap-x-12 sm:gap-y-6  gap-x-4 gap-y-5  mt-2 sm:mt-4 place-items-center'>
            {products.map((product)=>
                <Card key={product.title}  image={product.img} rating={product.inStock} price={product.price} title={product.title} type={product.categories}  />
            )}

        </div>
    </div>
  )
}

export default Products