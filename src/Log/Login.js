import React from "react";
import "./log.css";
const Login = () => {
  return (
    <div className="login">
      <div class="container">
        <div class="row">
          <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div class="panel border bg-white">
              <div class="panel-heading">
                <h3 class="pt-3 font-weight-bold">Snap Date</h3>
              </div>
              <div class="panel-body p-3">
                <form action="login_script.php" method="POST">
                  <div class="form-group py-2">
                    <div class="input-field">
                      {" "}
                      <span class="far fa-user p-2"></span>{" "}
                      <input
                        type="text"
                        placeholder="Username or Email"
                        required
                      />{" "}
                    </div>
                  </div>
                  <div class="form-group py-1 pb-2">
                    <div class="input-field">
                      {" "}
                      <span class="fas fa-lock px-2"></span>{" "}
                      <input
                        type="password"
                        placeholder="Enter your Password"
                        required
                      />{" "}
                      <button class="btn bg-white text-muted">
                        {" "}
                        <span class="far fa-eye-slash"></span>{" "}
                      </button>{" "}
                    </div>
                  </div>

                  <div class="btn btn-primary btn-block mt-3">
                    {" "}
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        fontSize: "20px",
                        outline: "none",
                      }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div class="mx-3 my-2 py-2 bordert">
                <div class="text-center py-3">
                  {" "}
                  <a
                    href="https://wwww.facebook.com"
                    target="_blank"
                    class="px-2"
                  >
                    {" "}
                    <img
                    className="img-log"
                      src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=464"
                      alt=""
                    />{" "}
                  </a>{" "}
                  <a href="https://www.google.com" target="_blank" class="px-2">
                    {" "}
                    <img
                    className="img-log"
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                      alt=""
                    />{" "}
                  </a>{" "}
                  <a href="https://www.github.com" target="_blank" class="px-2">
                    {" "}
                    <img
                    className="img-log"
                      src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                      alt=""
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
