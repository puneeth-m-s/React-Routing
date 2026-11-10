import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.svg';
export function Header() {
  return (
    <>
      <div>
        <header>
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
