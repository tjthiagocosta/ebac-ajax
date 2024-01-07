document
  .getElementById("btn-buscar-cep")
  .addEventListener("click", function () {
    const xhttp = new XMLHttpRequest();

    const cep = document.getElementById("cep").value;
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    xhttp.open("GET", endpoint, true);

    xhttp.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        document.getElementById(
          "endereco"
        ).value = `${response.logradouro}, ${response.bairro}, ${response.localidade} - ${response.uf}`;
      } else {
        console.error("Request failed.  Returned status of " + this.status);
      }
    };

    xhttp.send();
  });
