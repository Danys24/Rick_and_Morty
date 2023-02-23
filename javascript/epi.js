

const apiRickEpi = async (pagina) =>{
   let url = "https://rickandmortyapi.com/api/episode/?page=" + pagina;
   const api = await fetch(url);
   const data = await api.json();
   console.log(data);
   divRes = document.querySelector("#resultado-epi");
   divRes.innerHTML = "";
   data.results.map(item => {
      divItem = document.createElement("div");
      divItem.innerHTML = `
           <div class = "card-container">
                <div class = "info-container">
                   <h3 class="card-titulo">${item.name}</h3>
                   <p><b>Episodio: </b> ${item.episode} </p>
                </div>

            </div>
      `;

      divRes.appendChild(divItem);
   });

}

apiRickEpi(1);