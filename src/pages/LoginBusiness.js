import React from 'react'

const LoginBusiness = () => {
  const url = "http://localhost:6060/retail/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const login = {
      email: email,
      password: password,
    };

    try {
      await axios({
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: url,
        data: login,
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

   return (
     <div className="App">
       <div className="container-fluid ">
         <div className="row g-0">
           <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
           <div className="col-md-8 col-lg-6">
             <div className="login d-flex align-items-center py-5">
               <div className="container">
                 <div className="row">
                   <div className="col-md-9 col-lg-8 mx-auto">
                     <h3 className="login-heading mb-4">Welcome back!</h3>

                     <form>
                       <div className="form-floating mb-3">
                         <input
                           required
                           type="email"
                           className="form-control "
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="name@example.com"
                         />
                         <label>Email address</label>
                         <span className="text-danger"></span>
                       </div>
                       <div className="form-floating mb-3">
                         <input
                           required
                           type="password"
                           className="form-control "
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="Password"
                         />
                         <label>Password</label>
                         <span className="text-danger"></span>
                       </div>

                       <div className="form-check mb-3">
                         <input
                           className="form-check-input"
                           type="checkbox"
                           value=""
                           id="rememberPasswordCheck"
                         />
                         <label
                           className="form-check-label"
                           for="rememberPasswordCheck"
                         >
                           Remember password
                         </label>
                       </div>

                       <div className="d-grid">
                         <Link to={"/business/home"}>
                           <button
                             className="btn btn-lg  btn-login text-uppercase fw-bold mb-2"
                             type="submit"
                             onSubmit={handleSubmit}
                           >
                             Log in
                           </button>
                         </Link>
                         <div className="text-center">
                           <a className="small" href="#">
                             Forgot password?
                           </a>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}

export default LoginBusiness