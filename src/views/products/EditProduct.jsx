const React = require("react");
const Layout = require("../Layout");

module.exports = function EditProduct({ login, role, product }) {
  return (
    <Layout login={login} role={role}>
      <h1>Изменить данные</h1>

      <main className="form-wrapper" role="main">
        <form id={product.id} name="editProduct">
          <label htmlFor="pName">Название:</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={product.name}
            autoComplete="off"
            placeholder="*"
          />

          <label htmlFor="pName">Стоимость:</label>
          <input
            name="price"
            type="number"
            className="form-control"
            value={product.price}
            autoComplete="off"
            placeholder="*"
          />

          <label htmlFor="pName">Описание:</label>
          <input
            name="description"
            type="text"
            className="form-control"
            value={product.description}
            autoComplete="off"
            placeholder="*"
          />

          <label htmlFor="pName">Количество на складе:</label>
          <input
            name="quantity"
            type="number"
            className="form-control"
            value={product.quantity}
            autoComplete="off"
            placeholder="*"
          />

          <label htmlFor="pName">Фото:</label>
          <input
            name="photo"
            type="URL"
            className="form-control"
            value={product.photo}
            autoComplete="off"
            placeholder="*"
          />

          <input
            type="submit"
            value="Изменить"
            className="btn btn-outline-secondary"
          />
        </form>
      </main>
      <script defer src="/js/edit.js" />
    </Layout>
  );
};
