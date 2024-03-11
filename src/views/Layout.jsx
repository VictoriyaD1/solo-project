const React = require("react");

function Layout({ children, login, role }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link type="image/x-icon" href="/assets/logo.png" rel="shortcut icon" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <title>Victory</title>
      </head>

      <body>
        <header className="">
          <nav
            className="navbar navbar-light"
            style={{ background: "#FFEFD5", display: "inline" }}
          >
            <a className="navbar-brand" href="/">
              <img
                src="/assets/logo.png"
                alt="Vi"
                style={{ width: "3%", margin: "1% 3%" }}
              />
              Victory{" "}
            </a>

            {login ? (
              <>
                {role ? (
                  <>
                    <a className="navbar-brand" id="navWord" href="/catalog">
                      Каталог
                    </a>
                    <a className="navbar-brand" id="navWord" href="/myProducts">
                      Мои товары
                    </a>
                    <a className="navbar-brand" id="navWord" href="/new">
                      Разместить
                    </a>
                  </>
                ) : (
                  <>
                    <a className="navbar-brand" id="navWord" href="/catalog">
                      Каталог
                    </a>
                    <a className="navbar-brand" id="navWord" href="/cart">
                      Корзина
                    </a>
                  </>
                )}

                <a className="navbar-brand" id="navWord" href="/logout">
                  Выйти
                </a>
              </>
            ) : (
              <>
                <a className="navbar-brand" id="navWord" href="/login">
                  Войти
                </a>
                <a className="navbar-brand" id="navWord" href="/register">
                  Создать
                </a>
              </>
            )}
          </nav>
        </header>

        <div className="">
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
