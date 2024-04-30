import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="one">About Us</h4>
            <ul className="list">
              <li>Contact us</li>
              <li>About us</li>
              <li>Carrers</li>
              <li>press</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="one">Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>123 Main Street<br>City, Country<br>Email: info@example.com<br>Phone: +1 (123) 456-7890</p>
                    </div> */}
        </div>
      </div>
    </footer>
  );
}
