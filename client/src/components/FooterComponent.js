import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <footer id="footer">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 text-lg-left text-center">
              <div class="copyright">
                &copy; Copyright <strong>Invest-E-Neur</strong>. All Rights Reserved
              </div>
              <div class="credits">
                
                Designed by Team Experience 404. (Riya-Puja-Yashfin)
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="/#intro" class="scrollto">Home</a>
                <a href="/#about" class="scrollto">About</a>
                
              </nav>
            </div>
          </div>
        </div>
        </footer>
    );
}

export default Footer;