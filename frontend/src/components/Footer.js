import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light" style={{ marginBottom: "20px" }}>
        <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
