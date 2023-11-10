import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/users/UserName";

function Header() {
  return (
    <header
      className="flex items-center justify-between  
    bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 
    sm:px-6"
    >
      {/* letter-spacing == tracking-widest == tracking-[0.5rem] */}
      <Link to="/" className="tracking-widest">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
