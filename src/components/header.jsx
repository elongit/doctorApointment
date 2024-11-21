import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between p-5 cursor-pointer ">
      <h1 className="font-bold text-3xl tracking-wider">
      <NavLink to="/">  Doct<span className="text-white bg-green-500 px-2 rounded">or</span></NavLink>
      </h1>
      <nav className="">
        <ul className="flex gap-5 font-semibold text-[18px] text-black/75 items-center">
       

             <li>
             <NavLink to="/">About</NavLink>
             </li>
         <li>
            <NavLink to="/">Need help?</NavLink>
         </li>

          <li className="bg-green-500 text-white px-4 py-2 rounded">
             <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
