import { products } from '../data/products';

export function ProductsPage() {
  return (
    <>
      <div className="text-center p-5 text-xl">
        <h2 className="text-based text-state-600">Here are some great tools to work with React</h2>
      </div>
      <ul className="list-name m-0 p-0">
        {products.map((product) => (
          <li key={product.id} className="p-1 text-base slate-800">
            {product.name}
          </li>
        ))}
      </ul>
    </>
  );
}
