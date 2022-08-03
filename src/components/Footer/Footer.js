import React from "react";
import logo from "../../assets/LogoTennis.png";

function Footer() {
  return (
    <div>
      <footer className="class_theme text-center text-lg-start text-white">
        <div className="container p-2">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "100px", height: "100px" }}
              >
                <img src={logo} height="90" alt="" loading="logo" />
              </div>

              <p className="text-center"></p>
              <ul class="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a
                    className="text-white px-2"
                    href="https://www.facebook.com/thoratennisacademymatale"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-white px-2"
                    href="https://www.instagram.com/thora_tennis_academy/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4"></h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" class="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" class="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" class="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4"></h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white">
                    <i className="fas fa-paw pe-3"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Contact</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street,
                    Poland
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone pe-2"></i>+ 01 234 567 89
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
