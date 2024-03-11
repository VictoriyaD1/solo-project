const form = document.querySelector("#registerForm");
const msg = document.querySelector(".regMsg");
// let selectRole = document.querySelector("#selectRole");
// console.log(selectRole.value);

form.addEventListener("submit", async (event) => {
  //вытащили рез-т, проверка заполненности, отображение сообщения и перенаправление на другую стр
  event.preventDefault();

  const data = new FormData(form);
  const inputData = Object.fromEntries(data);

  if (
    !inputData.login ||
    !inputData.email ||
    !inputData.password ||
    !inputData.role
  ) {
    msg.innerText = "Заполните все поля";
    msg.style.color = "#DC143C";
    setTimeout(() => {
      msg.innerText = "";
    }, 2000);
  } else {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      const result = await response.json();
      if (result.regDone) {
        msg.innerText = result.regDone;
        msg.style.color = "#FF8C00";

        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = "#DC143C";
        setTimeout(() => {
          msg.innerText = "";
        }, 1000);
      }
    } catch (error) {
      console.log("Упс", error);
    }
  }
});
