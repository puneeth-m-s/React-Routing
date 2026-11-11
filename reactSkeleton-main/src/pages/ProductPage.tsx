import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('search'));
  return (
    <div className="text-center p-5 text-xl">
      <h2 className="text-base text-slate-600"> Here are some great tools to work with React </h2>
      <ul className="list-none m-0 p-0 ">
        {products.map((product) => (
          <li key={product.id} className="p-1 text-base slate-800">
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
