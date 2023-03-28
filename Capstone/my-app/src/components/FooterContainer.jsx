import React from "react";
import Logo from "../img/logo1.png";
import {SiFoodpanda, SiGrab, SiShopify, SiEbay, SiShopware } from 'react-icons/si'

const FooterContainer = () => {
  return (
    <div className="row justify-center">
      <div className="col-md-7 text-center items-center">
        <div className="h-auto mb-4 items-center justify-center">
          <img
            className="w-20 h-20 object-cover mx-auto"
            src={Logo}
            alt=""
          />
          <ul className="flex items-center justify-center gap-10 mb-5 text-orange-500">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Suppliers</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
           
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div class="mb-4 text-textColor">
            <h3>Stay in touch</h3>
            <ul class="flex items-center justify-center gap-10 mb-5 my-3">
              <li class="in">
                <a href="#">
                    <SiFoodpanda />
                </a>
              </li>
              <li class="fb">
                <a href="#">
                  <SiGrab />
                </a>
              </li>
              <li class="tw">
                <a href="#">
                  <SiShopify />
                </a>
              </li>
              <li class="pin">
                <a href="#">
                  <SiEbay />
                </a>
              </li>
              <li class="dr">
                <a href="#">
                  <SiShopware />
                </a>
              </li>
            </ul>
          </div>

          <div class="copyright">
            <p class="mb-0">
              <small>© Food N' Go. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
