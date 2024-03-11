const React = require("react");
const Layout = require("../Layout");

function Catalog({ login, role, products }) {
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <div>
        <h2 id="titleHomeWelcome">Каталог</h2>
        <div className="catalogCards">
          {products.reverse().map((product) => (
            <div key={product.id} className="card" style={{ width: "18rem" }}>
              {product.photo ? (
                <img
                  className="card-img-top"
                  src={product.photo}
                  alt="Фото товара"
                />
              ) : (
                <img
                  className="card-img-top"
                  src="/assets/package.jpg"
                  alt="Фото товара"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.price}€</h5>
                <p className="card-text">{product.name}</p>
                {role ? (
                  <a
                    href={`/catalog/${product.id}`}
                    type="submit"
                    className="btn btn-outline-secondary"
                  >
                    Подробнее
                  </a>
                ) : (
                  <>
                    {" "}
                    <a
                      href={`/catalog/${product.id}`}
                      type="submit"
                      className="btn btn-outline-secondary"
                    >
                      Подробнее
                    </a>
                    {"  "}
                    <a
                      href={`/cart/${product.id}`}
                      type="button"
                      className="btn btn-outline-secondary"
                    >
                      В корзину
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Catalog;
