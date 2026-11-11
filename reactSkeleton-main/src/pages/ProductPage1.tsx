import { useParams } from 'react-router-dom';
import { products } from '../data/products';

type Params = {
  id: string;
};

export function ProductPage1() {
  const params = useParams<Params>();
  //console.log(params);
  const id = params.id === undefined ? undefined : parseInt(params.id);
  const requiredProduct = products.find((product) => product.id === id);
  console.log(requiredProduct);
  return (
    <div>
      {' '}
      {requiredProduct === undefined ? (
        <h1>unknown product</h1>
      ) : (
        <>
          <h1>{requiredProduct.name}</h1>
          <p>{requiredProduct.description}</p>
          <p>{requiredProduct.price}</p>
        </>
      )}{' '}
    </div>
  );
}
