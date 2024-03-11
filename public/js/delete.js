const products = document.querySelector(".products");

products.addEventListener("click", async (event) => {
  if (event.target.classList.contains("delete")) {
    try {
      const { id } = event.target;
      const response = await fetch(`/delete/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        const deletedCard = event.target.closest(".card");
        deletedCard.remove();
      } else {
        console.error("Не удалось удалить");
      }
    } catch (error) {
      console.log("попали в catch");
    }
  }
});
