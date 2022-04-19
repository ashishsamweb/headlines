import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <nav className="container-fluid">
        <div className="navigator col-md-12">
          <div className="logo">
            <h1><Link to="/" alt="Logo">Headlines.com</Link></h1>
          </div>
          <div className="nav-item">
          <li>
              <Link to="/" alt="home">
                Home
              </Link>
            </li>

            <li>
              <Link to="/Latest">
                Latest
              </Link>
            </li>

           
            <li>
              <a href="/" alt="media">
                Politics
              </a>
            </li>

            <li>
              <a href="/" alt="media">
                Sports
              </a>
            </li>

            <li>
              <a href="/" alt="media">
                Health
              </a>
            </li>

            <li>
              <a href="/" alt="media">
                Glamour
              </a>
            </li>
          </div>
        </div>
      </nav>
    </section>
  );
};
