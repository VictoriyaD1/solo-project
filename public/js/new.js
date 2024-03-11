const { newProduct } = document.forms;
const buttonForm = document.querySelector("#buttonForm");

newProduct.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(newProduct);
  const inputs = Object.fromEntries(formData);

  try {
    const response = await fetch("/new", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();

    console.log(result);
    if (result) {
      window.location.href = "/catalog";
    } else {
      console.log("no result");
    }
  } catch (error) {
    console.log("попали в catch");
  }
});
