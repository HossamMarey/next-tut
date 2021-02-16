import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <Image src="/logo.png" width="40" height="40" />
            <span className="ms-2"> Codv Blog</span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/blog" ? "active" : ""}`
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
