import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.svg';
export function Header() {
  return (
    <>
      <div>
        <header>
          <img src={Logo} alt="Logo" className="inline-block h-20" />
          <h1 className="text-2xl"> React Tools</h1>
          <nav>
            <Link to="Products">Products</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
