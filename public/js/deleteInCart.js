const cards = document.querySelector(".cards");
const gesamt = document.querySelector(".gesamt");


cards.addEventListener("click", async (event) => {
const { id } = event.target;
      const response = await fetch(`/cart/deleteInCart/${id}`, {
        //полный путь прописывать
        method: "DELETE",
      });

      const result = await response.json();
      console.log('res:', result)

  if (event.target.classList.contains("btnDelInCart")) {
    try {
      
      // gesamt
      // let sum = 0;
      // products.forEach((product) => {
      //   sum += product["Product.price"];
      // });

      if (result.success) {
        const deletedCard = event.target.parentNode; //class
        deletedCard.remove();
      } else {
        console.error("Не удалось удалить");
      }
    } catch (error) {
      console.log("попали в catch");
    }
  }
});
