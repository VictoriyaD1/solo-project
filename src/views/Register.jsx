const React = require("react");
const Layout = require("./Layout");

module.exports = function Registration() {
  return (
    <Layout>
      <script defer src="/js/reg.js" />
      <link rel="stylesheet" href="/css/style.css" />
      <div className="">
        <div className="">
          <h1 id="titleHomeWelcome">Регистрация</h1>
        </div>
        <div className="bodyMargin">
          <form method="post" action="/register" id="registerForm">
            <div className="inputLog">
              <input
                name="login"
                type="text"
                className="form-control"
                autoComplete="off"
                id="inputName"
                placeholder="Имя*"
              />
            </div>

            <div className="inputLog">
              <input
                name="email"
                type="email"
                className="form-control"
                autoComplete="off"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Почта*"
              />
            </div>

            <div className="inputLog">
              <input
                name="password"
                type="password"
                autoComplete="off"
                className="form-control"
                id="inputPassword"
                placeholder="Пароль*"
              />
            </div>

            <div className="inputLog">
              <input
                name="role"
                type="role"
                autoComplete="off"
                className="form-control"
                id="inputRole"
                placeholder="Роль*"
              />
            </div>

            <small id="emailHelp" className="form-text text-muted">
              Мы не передаём данные третьим лицам{" "}
            </small>

            <h3 className="regMsg" />
            <button type="submit" className="btn btn-outline-secondary">
              Создать
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
