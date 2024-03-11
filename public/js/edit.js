const { editProduct } = document.forms;

editProduct.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(editProduct);

  const inputs = Object.fromEntries(formData); //достаем содержимое инпутов

  try {
    const { id } = event.target;
    const response = await fetch(`/edit/${id}`, { //здесь запрос и ответ сразу
      method: "PUT", //ручка
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs), // достаем и получаем req.body
    });
    const result = await response.json(); //парсим ответ

    if (result) {
      window.location.href = "/myProducts"; // тот же redirect смысл феча сходит на нет
    } else {
      console.log("Неправильный результат");
    }
  } catch (error) {
    console.log("попали в catch:", error);
  }
});
