import { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
      </a>

            <a className="navbar-item">
              Documentation
      </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
        </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
          </a>
                <a className="navbar-item">
                  Jobs
          </a>
                <a className="navbar-item">
                  Contact
          </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
          </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
          </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="cover">
        <img src="/logo.png" alt="" />
        <h1>前端爱好者博客</h1>
        <p>分享前端， H5小程序，小游戏</p>
        <p>
          <Link href="/posts">
            <a>文章列表</a>
          </Link>
        </p>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Copyright © unleashedsprite.com

              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .cover {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-item: center;
          flex-direction: column;
          text-align: center;
        }
        .cover > img{
          margin: 0 auto;
          width: 120px;
          height: 120px;
        }
      `}</style>
    </>
  );
};

export default Home;
