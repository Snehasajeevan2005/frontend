
    import React from "react";
    import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
    
    const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#ff4d4d", padding: "10px" }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              {/* Popping App Name */}
              <Link
                className="navbar-brand fw-bold"
                to="/"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  textTransform: "uppercase",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                  letterSpacing: "2px",
                }}
              >
                <span style={{ color: "gold" }}>Savor</span>Sync
              </Link>
    
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white fw-bold fs-5" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white fw-bold fs-5" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white fw-bold fs-5" to="/contact">Contact Us</Link>
                </li>
              </ul>
    
              {/* Stylish Login/Register Buttons */}
              <div>
                <Link
                  className="btn btn-light me-2 fw-bold"
                  style={{ color: "red", borderRadius: "20px", padding: "8px 15px" }}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn"
                  style={{
                    backgroundColor: "gold",
                    color: "red",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "8px 15px",
                  }}
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;
    
