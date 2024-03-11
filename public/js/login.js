const formLogin = document.querySelector("#formLogin");
const msgLogin = document.querySelector(".logMsg");

formLogin.addEventListener("submit", async (event) => {
  event.preventDefault(); //остановить дефолтное поведение

  const dataLogin = new FormData(formLogin);  //получить данные из формы
  const resInputs = Object.fromEntries(dataLogin); //содержимое инпутов получить

  if (!resInputs.email || !resInputs.password) {
    msgLogin.innerText = "Заполните все поля";
    msgLogin.style.color = "#FF8C00";
    setTimeout(() => {
      msgLogin.innerText = ""; 
    }, 1000);
  } else {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resInputs),
      });
      //получение ответа

      const result = await response.json(); //преобразование данных в json
      console.log(result);

      if (result.logDone) {
        msgLogin.innerText = result.logDone;
        msgLogin.style.color = "#6495ED";
        setTimeout(() => {
          window.location.href = "/"; //перенаправить на другю страницу
        }, 500);
      }
      if (result.errPassword) {
        msgLogin.innerText = result.errPassword;
        msgLogin.style.color = "#DC143C";
        setTimeout(() => {
          msgLogin.innerText = "";
        }, 1000);
      }
      if (result.err) {
        msgLogin.innerText = result.err;
        msgLogin.style.color = "#DC143C";
        setTimeout(() => {
          window.location.href = "/register";
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  }
});
