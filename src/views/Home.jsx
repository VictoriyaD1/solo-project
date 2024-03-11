const React = require("react");

const Layout = require("./Layout");

module.exports = function Home({ login, role }) {
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <script defer src="/js/map.js"></script>
      <head>
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=Your API key&lang=ru_RU"
          type="text/javascript"
        ></script>
      </head>

      {login ? (
        <>
          <h2 id="titleHomeWelcome"> Рады Вас видеть, {login}</h2>
          <img
            className="welcomeImg"
            src="/assets/photo1.jpg"
            alt="Brand-photo"
          />{" "}
        </>
      ) : (
        <>
          <h2 id="titleHomeWelcome">Добро пожаловать</h2>
          <img
            className="welcomeImg"
            src="/assets/photo3.jpg"
            alt="Brand-photo"
          />{" "}
        </>
      )}

      <div className="welcome-container">
        <h2 className="titleHome">О бренде</h2>
        <div className="brandDescription">
          VICTORY - российский интернет-сервис для размещения одежды. Товары,
          предлагаемые к продаже на "VICTORY" выставляются предпринимателями и
          малыми бизнесами, занимающимися пошивом одежды. Они создают лаконичную
          и качественную одежду, чтобы наполнять красотой каждый момент жизни.
          Бренд основан в 2024 году в Чебоксарах.
        </div>
        <h2 className="titleHome">Мы на карте</h2>
        <div id="map" className="map"></div>
      </div>
    </Layout>
  );
};
