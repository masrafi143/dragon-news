import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-bold text-center text-2xl">
            Register your account
          </h2>
          <form>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <label className="label">
                <input type="checkbox" className="checkbox my-2" />
                Accept Terms & Conditions
              </label>
              <button className="btn btn-neutral">Register</button>
              <p>
                Already Have An Account?{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-500 underline text-center"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
