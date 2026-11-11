import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { Form } from 'react-router-dom';

export function Header() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // function handleSearch(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   console.log(formData.get('search'));
  //   const s1 = formData.get('search') as string;
  //   // setSearchParams({ s1 });
  //   navigate('products/?s1=${s1}');
  // }
  return (
    <>
      <div>
        <header className="text-conter text-slate-900 bg-slate-900 h-400 p-5">
          <form action="/products">
            <input
              type="search"
              name="search1"
              placeholder="Search"
              //defaultValue={searchParams.get('search') ?? ''}
            />
          </form>
          <NavLink to="/products">
            <img src={Logo} alt="Logo" className="inline-block h-20" />
          </NavLink>

          <h1 className="text-2xl"> React Tools</h1>
          <nav>
            <Link to="/products">Products</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
