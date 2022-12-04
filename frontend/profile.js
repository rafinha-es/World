   
document.addEventListener("DOMContentLoaded", function(e) {
    const value = document.cookie.split('=')
    console.log(value[1])

    var username = value[1]

    $.ajax({
        url: "http://127.0.0.1:3008/information",
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
          username: username,
        }),
        success: function (data) {
          var usuario = JSON.stringify(data)

          console.log(usuario[0].name)
          document.getElementById('fullname').innerHTML = data[0].name+ " " +data[0].lastname
          document.getElementById('fullname1').innerHTML = data[0].name+ " " +data[0].lastname
          document.getElementById('bio').innerHTML  = data[0].bio
          document.getElementById('phone').innerHTML  = data[0].phone
          document.getElementById('ocupation').innerHTML  = data[0].ocupation
          document.getElementById('instagram').innerHTML  = data[0].instagram
          document.getElementById('linkedin').innerHTML  = data[0].linkedin
          document.getElementById('github').innerHTML  = data[0].github
          document.getElementById('local1').innerHTML  = "<p>" + data[0].local + "</p>"
          document.getElementById('local').innerHTML  = "<p>" + data[0].local + "</p>"
        },
    })
});

function updateData(){
  const value = document.cookie.split('=')
  const username = value[1]
  const name = document.getElementById("name-form").value
  const lastname =  document.getElementById("lastname-form").value
  const bio=  document.getElementById("bio-form").value
  const phone=  document.getElementById("phone-form").value
  const ocupation=  document.getElementById("ocupation-form").value
  const instagram= document.getElementById("instagram-form").value
  const linkedin= document.getElementById("linkedin-form").value
  const github= document.getElementById("github-form").value
  const local= document.getElementById("local-form").value

  $.ajax({
    url: "http://127.0.0.1:3008/userUpdate",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({
        username: username,
        name: name,
        lastname: lastname,
        bio:bio,
        phone:phone,
        ocupation:ocupation,
        instagram:instagram,
        linkedin:linkedin,
        github:github,
        local: local
    }),
    success: function (data) {
      alert("Seu perfil foi atualizado com sucesso")
      
      document.getElementById('fullname').innerHTML = data[0].name+ " " +data[0].lastname
      document.getElementById('fullname1').innerHTML = data[0].name+ " " +data[0].lastname
      document.getElementById('bio').innerHTML  = data[0].bio
      document.getElementById('phone').innerHTML  = data[0].phone
      document.getElementById('ocupation').innerHTML  = data[0].ocupation
      document.getElementById('instagram').innerHTML  = data[0].instagram
      document.getElementById('linkedin').innerHTML  = data[0].linkedin
      document.getElementById('github').innerHTML  = data[0].github
      document.getElementById('local1').innerHTML  = "<p>" + data[0].local + "</p>"
      document.getElementById('local').innerHTML  = "<p>" + data[0].local + "</p>"

      setTimeout(function () {
        window.location.href='/profile';
      }, 2000);
    },
})
  
}