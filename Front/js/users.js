const URL = "http://localhost:3001/api/prueba/users";

const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
e.preventDefault();

let input = e.target;


    let formData = new FormData();
    formData.append("nombre", input.name.value);
    formData.append("apellido", input.apellido.value);
    formData.append("numero", input.numero.value);
    formData.append("fecha", input.fecha.value);


fetch("http://localhost:3001/api/prueba/users", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
});

fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
