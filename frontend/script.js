function loginUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  $.ajax({
    url: "http://127.0.0.1:3008/auth",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({
      username: username,
      password: password,
    }),
    success: function (data) {
      alert(
        "Login realizado com sucesso, você será redirecionado(a) para o seu perfil"
      );
      var nameUser = data[0].username;
      document.cookie = 'username='+ nameUser;
      setTimeout(() => {
        window.location.href = "/profile.html";
      }, "3000");
      
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}

function createRegister() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  console.log(username, password, email);

  $.ajax({
    url: "http://127.0.0.1:3008/register",
    type: "POST",
    data: {
      username: username,
      email: email,
      password: password,
    },
    success: (notification = () => {
      alert("Usuário com username:" + username + " cadastrado com sucesso !");
      setTimeout(() => {
        window.location.href = "/login.html";
      }, "1000");
    }),
  });
}
