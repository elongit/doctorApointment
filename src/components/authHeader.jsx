import { NavLink } from "react-router-dom";
const AuthHeader = () => {
  return (
    <header className="flex justify-between p-5 cursor-pointer ">
      <h1 className="font-bold text-xl md:text-3xl tracking-wider shadow p-2 rounded ">
      <NavLink to="/">  Doct<span className=" bg-green-500 px-2 text-white rounded">or</span></NavLink>
      </h1>
     
    </header>
  );
};

export default  AuthHeader;
