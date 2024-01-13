import { Link } from "react-router-dom";
import useQuestionStore from "../../store/zustand";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-transparent text-neutral-900 px-5 md:px-10 flex items-center justify-between py-5 text-sm border-b-slate-200 border">
      {/* <h1 className="text-yellow-500 text-2xl font-bold tracking-tight flex items-center gap-1"> */}
      
      <h1 className="text-yellow-500 text-2xl font-bold tracking-tight flex items-center gap-1">
        Quiz<span className="text-neutral-900"> ify</span>
      </h1>
      {/* <h1 className="text-yellow-500 text-2xl font-bold tracking-tight flex items-center gap-1">
      <Link
            className="flex items-center gap-1"
            to={"/"}
          >
            Quiz<span className="text-neutral-900">ify</span>
          </Link>
          </h1> */}
      <div className="space-x-5">
        {!auth?.email && (
          <Link
            className="py-2 px-5 text-yellow-500 font-semibold border rounded-full border-yellow-500"
            to={"/login"}
          >
            Login
          </Link>
        )}
        {auth?.email ? (
          <button
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-yellow-600"
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-yellow-500"
            to={"/register"}
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
