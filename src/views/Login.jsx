import logo from "../res/logo.png";

const Login = function () {

  return (
    <div>
      <div className="container" id="bloco">
        <div className="row d-flex justify-content-center mt-3 w-100">
          <div className="col-md-6 login" align="center">

          </div>
          <div className="col-md-6 login" align="center">
            <img src={logo} alt="logo" />


            <hr className="mt-5" />
            <button className="btnGoogle"><i className="fa fa-google"></i> Entrar com Google</button>
            <button className="btnGoogle"><i className="fa fa-envelope"></i> Entrar com Email</button>


          </div>


        </div>

      </div>
    </div>


  );

}

export default Login;
