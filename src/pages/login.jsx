import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <fieldset className="lg:w-2/4 m-auto mt-10 p-2 md:p-5 md:shadow">
      <legend className="text-2xl font-bold text-green-500 drop-shadow">Login to your account</legend>
      <form  className=" flex flex-col  gap-4">
        <label htmlFor="username" className="text-[17px] font-semibold">Username*</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Entre your username"
          className="p-2 border-2 border-white hover:border-green-500 transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label htmlFor="pass" className="text-[17px] font-semibold">Password*</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Entre your password"
            className="p-2 border-2 border-white hover:border-green-500
             transition-all bg-slate-100 h-12 outline-none"
        />

        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-2">Login</button>
        <div className="cursor-pointer">
            <small>Already have an account? 
                <NavLink to='/signUp'>sign up</NavLink> 
            </small>
        </div>
      </form>
    </fieldset>
  );
};
export default Login