const React = require("react");
const Layout = require("../Layout");

function Catalog({ login, role, product }) {
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <div>
        <h2 id="titleHomeWelcome">Подробнее о товаре</h2>
        <div className="descriptionCard">
          <img className="detailsImg" src={product.photo} alt="Фото товара" />
          <div className="jumbotron">
            <h1 id="nameAndPrice">{product.name}</h1>
            <h2 id="nameAndPrice">{product.price}€</h2>
            <p className="lead">{product.description}</p>

            {role ? (
              <p></p>
            ) : (
              <>
                <hr className="my-4" />
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
      </div>
    </Layout>
  );
}

module.exports = Catalog;
