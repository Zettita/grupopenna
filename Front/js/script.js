const URL = "http://localhost:3001/";

function handleFileSelect() {
  // Selecciono los input del form
  const tittlePdf = document.getElementById("tittle");
  const fileInput = document.getElementById("pdfFile");
  // Selecciono los input de la section preview
  const fileName = document.getElementById("fileName");
  const preview = document.getElementById("pdfPreview");
  // Selecciono el archivo cargado al input
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    fileName.textContent = selectedFile.name;

    const reader = new FileReader();
    reader.onload = function (e) {
      pdfPreview.src = e.target.result;
    };
    reader.readAsDataURL(selectedFile);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = e.target;

  let formData = new FormData();
  formData.append("titulo", input.tittle.value);
  formData.append("file", input.pdfFile.files[0]);

  fetch("http://localhost:3001/api/prueba/pdf", {
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

fetch("http://localhost:3001/api/prueba/pdf")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
