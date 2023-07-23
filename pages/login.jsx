import React from "react";

const login = () => {
  return (
    <>
      <main className="login">
        <div className="shadow login__form">
          <h2 className="login__h2">Admin Login</h2>
          <form action="">
            <div className="login__form--input">
              <input placeholder="username" type="text" />
              <span>
                <i className="fas fa-user-alt"></i>
              </span>
            </div>
            <div className="login__form--input">
              <input placeholder="password" type="password" />
              <span>
                <i className="fas fa-lock-open"></i>
              </span>
            </div>
            <div className="login__form--forget">
              <span className="login__check">
                <input type="checkbox" /> Remember me
              </span>
              <span className="login__forget">
                <a href="">Forgot password? </a>
              </span>

              <div className="clearfix"></div>
            </div>
            <button>Login</button>
          </form>
        </div>
        {/* <!-- end of footer --> */}
      </main>
    </>
  );
};

export default login;
