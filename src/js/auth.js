function initAuth() {
  const codigoCorreto = "CMA2025";
  const adminColuna = document.getElementById("adminColuna");
  const profileIcon = document.getElementById("profileIcon");
  let isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  const login = () => {
    adminColuna.classList.remove("hidden");
    adminColuna.classList.add("flex");
    profileIcon.innerHTML = `<img src="src/img/favicon1.png" alt="Favicon" class="h-8 w-8 rounded-full">`;
    localStorage.setItem("isAdminLoggedIn", "true");
    isAdminLoggedIn = true;
  };

  const logout = () => {
    adminColuna.classList.add("hidden");
    adminColuna.classList.remove("flex");
    profileIcon.innerHTML = `<i data-feather="user" class="w-6 h-6 text-gray-600"></i>`;
    feather.replace(); // Recria o ícone do Feather
    localStorage.removeItem("isAdminLoggedIn");
    isAdminLoggedIn = false;
  };

  // Verifica o estado de login ao carregar a página
  if (isAdminLoggedIn) {
    login();
  }

  // Adiciona o evento de clique ao ícone de perfil
  profileIcon.addEventListener("click", () => {
    if (isAdminLoggedIn) {
      if (confirm("Deseja sair do perfil administrativo?")) {
        logout();
      }
    } else {
      const codigo = prompt(
        "Informe o código para acessar a área administrativa:"
      );
      if (codigo === codigoCorreto) {
        login();
      } else if (codigo !== null && codigo !== "") {
        alert("Código incorreto!");
      }
    }
  });
}
