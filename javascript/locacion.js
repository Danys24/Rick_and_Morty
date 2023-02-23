
let personas = ["Daniel", "Pedro", "jaime"];

console.log(personas);

personas.map(p => {
  console.log(p + " polludos");
});

console.log(personas);

const apiRickLocacion = async (pagina) =>{
   let url = "https://rickandmortyapi.com/api/location/?page=" + pagina;
   let urlPersonajes = "https://rickandmortyapi.com/api/character/";
   const api = await fetch(url);
   const data = await api.json();
   console.log(data);
   divRes = document.querySelector("#resultado-locacion");
   divRes.innerHTML = "";
   data.results.map(item => {
        divItem = document.createElement("div");
        /*
        for(let i = 1; i < item.residents.length; i++){
          console.log(item.residents[0]);
        }
        */

        divItem.innerHTML = `

             <div class = "card-container">
                <div class = "info-container">
                   <h3 class="card-titulo">${item.name}</h3>
                   <p><b>Tipo: </b> ${item.type} </p>
                   <p><b>Dimension: </b> ${item.dimension} </p>
                </div>

                <div class = "residentes">
                   
                </div>
             </div>
        `;
        
        divRes.appendChild(divItem);
        /*
        divResidentes = document.querySelector(".residentes");
        //divResidentes.innerHTML = "";    
        item.residents.map( res => {
          divItemRes = document.createElement("div");
          divItemRes.innerHTML = `
              <div>
                  <a href="${res}">Nombre</a>
              <div>
          `;
          divRes.appendChild(divItemRes);
        });
        */
   });

}

apiRickLocacion(1);
