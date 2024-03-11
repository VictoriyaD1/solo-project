/* eslint-disable react/no-array-index-key */
const React = require("react");
const Layout = require("../Layout");

module.exports = function NewProduct({ login, role, errors }) {
  return (
    <Layout login={login} role={role}>
      <link rel="stylesheet" href="/css/style.css" />
      <script defer src="/js/new.js" />
      <h1 id="titleHomeWelcome">Добавление товара</h1>
      <div className="bodyMargin">
        <main className="form-wrapper" role="main">
          {errors && (
            <div className="errors-wrapper">
              <span>Ваша запись не может быть сохранена:</span>
              <ul className="errors">
                {errors.map((error, index) => (
                  <li className="error" key={index}>
                    {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form name="newProduct">
            <label htmlFor="pName"></label>
            <input
              id="pName"
              name="name"
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Название*"
            />

            <label htmlFor="pPrice"></label>
            <input
              id="pPrice"
              name="price"
              type="number"
              className="form-control"
              autoComplete="off"
              placeholder="Цена*"
            />

            <label htmlFor="pQuantity"></label>
            <input
              id="pQuantity"
              name="quantity"
              type="number"
              className="form-control"
              autoComplete="off"
              placeholder="Количество на продажу*"
            />

            <label htmlFor="pDescription"></label>
            <input
              id="pDescription"
              name="description"
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Подробнее о товаре"
            />

            <label htmlFor="pPhoto"></label>
            <input
              id="pPhoto"
              name="photo"
              type="URL"
              className="form-control"
              autoComplete="off"
              placeholder="Ссылка на фото"
            />

            <br />
            <button
              type="submit"
              id="buttonForm"
              className="btn btn-outline-secondary"
            >
              На продажу
            </button>
          </form>
        </main>
      </div>
    </Layout>
  );
};
