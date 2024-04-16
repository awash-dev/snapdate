import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div class="container1 my-10">
        {/* <!-- Footer --> */}
        <footer
          class="text-center text-lg-start text-white"
          style={{ background: " #929fba" }}
        >
          {/* <!-- Grid container --> */}
          <div class="container1 p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section class="">
              {/* <!--Grid row--> */}
              <div class="row">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Snap Date
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr class="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a class="text-white">Home</a>
                  </p>
                  <p>
                    <a class="text-white">About</a>
                  </p>
                  <p>
                    <a class="text-white">Chat</a>
                  </p>
                  <p>
                    <a class="text-white">camera</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr class="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <hr class="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="fas fa-home mr-3"></i>Awash Dev, ETHIOPIA
                  </p>
                  <p style={{fontSize: "15px" }}>
                    <i class="fas fa-envelope mr-3"></i>mohammedhusse4242@gmail.com
                  </p>
                  <p>
                    
                    <i class="fas fa-phone mr-3"></i> +2519 870 257 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> +2517 153 526 44
                  </p>
                </div>
                {/* <!-- Grid column -->

          <!-- Grid column --> */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  {/* <!-- Facebook --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #3b5998" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>

                  {/* <!-- Twitter --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #55acee" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>

                  {/* <!-- Google --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-google"></i>
                  </a>
                  {/* 
            <!-- Instagram --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #ac2bac" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  {/* <!-- Linkedin --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  {/* <!-- Github --> */}
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ background: " #333333" }}
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container -->

    <!-- Copyright --> */}
          <div
            class="text-center p-3"
            style={{ background: " rgba(0, 0, 0, 0.2)" }}
          >
            ALL &copy; 2024 reserved by|
            <a class="text-white" href="/">
              Awash dev|
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
};

export default Footer;
