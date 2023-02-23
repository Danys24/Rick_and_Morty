console.log("Estamos repiola");

const apiRick = async (pagina) => {
   let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
   const api = await fetch(url);
   const data = await api.json();
   console.log(data);
   divRes = document.querySelector("#resultado");
   divRes.innerHTML = "";
   data.results.map(item => {
   	  divItem = document.createElement("div");
   	  divItem.innerHTML = `

   	       <div class = "card-container">
   	          <img src="${item.image}" alt= "" class = "img-cha">
   	          <div class = "info-container">
   	             <h3 class="card-titulo">${item.name}</h3>
   	             <p><b>Estatus: </b> ${item.status} </p>
   	             <p><b>Especie: </b> ${item.species} </p>
   	             <p><b>Genero: </b> ${item.gender} </p>
   	          </div>

   	       </div>


   	  `;

   	  divRes.appendChild(divItem);
   });
}

apiRick(1);

