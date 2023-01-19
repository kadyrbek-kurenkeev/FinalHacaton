import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const showFooterList = () => {
    console.log("hello");
  };

  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "rgba(244,243,238,1.05)" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="footer_main_body">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img
                  src="https://capricathemes.com/opencart/OPC10/OPC100231/catalog/view/theme/Bookmart/image/codezeel/footer-logo.png"
                  alt=""
                />
              </h6>
              <p>
                It is a long established fact that a reader will established
                when looking at its layout.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase text-dark fw-bold mb-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Information
                <MDBIcon
                  className="footer_icon_down"
                  onClick={() => setToggle(!toggle)}
                  fas
                  icon="chevron-down"
                />
              </h6>
              {toggle && (
                <ul className="footer_list">
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        About us
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Delivery Information
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Privancy Policy
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Site Map
                      </a>
                    </p>
                  </li>
                </ul>
              )}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase text-dark fw-bold mb-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Extras
                <MDBIcon
                  className="footer_icon_down"
                  fas
                  icon="chevron-down"
                  onClick={() => setToggle2(!toggle2)}
                />
              </h6>
              {toggle2 && (
                <ul className="footer_list">
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Brands
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Gift Certificates
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Affiliate
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!" className="text-reset">
                        Specials
                      </a>
                    </p>
                  </li>
                </ul>
              )}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase text-dark fw-bold mb-4"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Contact
                <MDBIcon
                  className="footer_icon_down"
                  fas
                  icon="chevron-down"
                  onClick={() => setToggle3(!toggle3)}
                />
              </h6>
              {toggle3 && (
                <ul className="footer_list">
                  <li>
                    <p>
                      <MDBIcon color="secondary" icon="home" className="me-2" />
                      New York, NY 10012, US
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon
                        color="secondary"
                        icon="envelope"
                        className="me-3"
                      />
                      info@example.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon
                        color="secondary"
                        icon="phone"
                        className="me-3"
                      />
                      + 01 234 567 88
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon
                        color="secondary"
                        icon="print"
                        className="me-3"
                      />{" "}
                      + 01 234 567 89
                    </p>
                  </li>
                </ul>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ borderTop: "1px solid rgba(1,1,1,0.1)" }}
      >
        Book Store © 2023
      </div>
    </MDBFooter>
  );
};

export default Footer;
