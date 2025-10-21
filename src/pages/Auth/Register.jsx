import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-bold text-center text-2xl">
            Register your account
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
                {/* name */}
              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" />
                {/* photo url */}
              <label className="label">Photo URL</label>
              <input name="photo" type="text" className="input" placeholder="Photo URL" />
                {/* email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
                {/* password */}
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
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
