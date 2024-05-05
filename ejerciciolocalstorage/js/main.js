loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
  
    inputLogin.forEach((item) => {
      localStorage.setItem("loginCredentials", JSON.stringify(item.value));
    });
  
    const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
    const username = loginCredentials[0];
    const password = loginCredentials[1];
  
    if (username && password) {
      alert(`Bienvenido, ${username}!`);
    }
  });