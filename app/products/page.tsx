type Product = {
    id: number;
    title: string;
    price: number;
}

async function getProducts() {
    const res = await fetch('http://localhost:3001/products');
    return res.json();
}

export default async function ProductList() {
    const products: Product[] = await getProducts();
  return (
    <div>
        {products.map((product, index) => (
            <p key={product.id}>{product.title}</p>
        ))}
    </div>
  )
}
