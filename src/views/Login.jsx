const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <link rel="stylesheet" href="/css/style.css" />
      <div className="">
        <div className="">
          <h1 id="titleHomeWelcome">Авторизация</h1>
        </div>
        <div className="bodyMargin">
          <form method="post" action="/login" id="formLogin">
            <div className="inputLog">
              <input
                name="email"
                type="email"
                className="form-control"
                autoComplete="off"
                id="inputEmail"
                placeholder="Email*"
              />
            </div>

            <div className="inputLog">
              <input
                name="password"
                type="password"
                className="form-control"
                autoComplete="off"
                placeholder="Password*"
              />
            </div>
            <small className="form-text text-muted">
              Мы не передаём данные третьим лицам
            </small>
            <h3 className="logMsg" />
            <button type="submit" className="btn btn-outline-secondary">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
