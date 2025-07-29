document.getElementById("registroBtn").addEventListener("click", function () {
    const nombre = document.getElementById("fname").value;
    const curso = document.getElementById("lname").value;

    fetch("../php/victimas.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `fname=${encodeURIComponent(nombre)}&lname=${encodeURIComponent(curso)}`
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Aquí puedes poner un alert o activar un video
      alert("Felicidades!");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Hubo un error al registrar");
    });
  });