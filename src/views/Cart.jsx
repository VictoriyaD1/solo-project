/* eslint-disable*/
const React = require("react");
const Layout = require("./Layout");

function MyCart({ login, role, products }) {
  let sum = 0;
  products.forEach((product) => {
    sum += product["Product.price"];
  });
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <div className="container">
        {role ? (
          <h1>Корзина недоступна. Зарегистрируйтесь как покупатель</h1>
        ) : (
          <>
            {products.length > 0 ? (
              <>
                <h2 id="titleCart">Корзина</h2>
                <div className="cards">
                  {products.map((product) => (
                    <div id="cardProduct">
                      <img
                        className="photoInCart"
                        src={product["Product.photo"]}
                        alt="Фото товара"
                      />
                      <div className="textCard">
                        <p style={{ fontSize: "30px" }}>
                          {product["Product.name"]}
                        </p>
                        <h5>{product["Product.price"]}€</h5>
                      </div>
                      <a
                        id={product.id}
                        className="btn btn-outline-danger btnDelInCart"
                      >
                        Удалить
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="gesamt">
                    <h4>Итого: {sum}€</h4>
                  </div>
                  <a
                    href="#"
                    type="submit"
                    className="btn btn-outline-secondary"
                  >
                    Оформить заказ
                  </a>
                </div>
              </>
            ) : (
              <>
                <h1 id="titleCart"> Ваша корзина пуста</h1>
                <a
                  href={`/catalog`}
                  type="submit"
                  className="btn btn-outline-secondary"
                >
                  Начать покупки
                </a>
              </>
            )}
          </>
        )}
      </div>

      <script defer src="/js/deleteInCart.js" />
    </Layout>
  );
}

module.exports = MyCart;
