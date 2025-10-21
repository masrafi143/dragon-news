import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signInUser} = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result=> {
            console.log(result.user);
            alert("Login successful");
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-bold text-center text-2xl">Login your account</h2>
          <form onSubmit={handleLogin}>
            {" "}
            <fieldset className="fieldset">
                {/* email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>
                Don't Have An Account?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-red-500 underline text-center"
                >
                  Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
