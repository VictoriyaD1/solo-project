const React = require("react");
const Layout = require("../Layout");

function MyProducts({ login, role, products }) {
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <div>
        <h2 id="titleHomeWelcome">Мои товары</h2>
       
          <div className="products">
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
                  <a
                    href={`/edit/${product.id}`}
                    type="submit"
                    className="btn btn-outline-warning"
                  >
                    Изменить
                  </a>{" "}
                  <a
                    id={product.id}
                    type="submit"
                    className="btn btn-outline-danger delete"
                  >
                    Удалить
                  </a>
                </div>
              </div>
            ))}
          </div>
     
      </div>
      <script defer src="/js/delete.js" />
    </Layout>
  );
}

module.exports = MyProducts;
