import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <section className="header">
      <nav className="container-fluid">
        <div className="navigator col-md-12">
          <div className="logo">
            <h1>Headlines.com</h1>
          </div>
          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Latest
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Gadgets
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Politics
              </a>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Sports
              </a>
            </li>
          </div>

          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Health
              </a>
            </li>
          </div>

          <div className="nav-item">
            <li>
              <a href="#" alt="media">
                Glamour
              </a>
            </li>
          </div>
        </div>
      </nav>
    </section>
  );
};
