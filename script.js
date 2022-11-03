const SHEET_ID = 
const ACCESS_TOKEN =
 

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/menu!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
).then(function(response){
    response.json().then((data)=>{
      
        const VALUES = data.values
        const LISTA =document.getElementById("lista-menu")

        for (let i = 0;  i<VALUES.length; i++){
            const PRODUCTO = document.createElement("div")
            PRODUCTO.classList = "menu-item"

            const ITEM_PROD = document.createElement("span")
            ITEM_PROD.className = "item producto"
            ITEM_PROD.innerHTML = VALUES[i][0]


            const PRECIO_PROD = document.createElement("span")
            PRECIO_PROD.className = "item precio"
            PRECIO_PROD.innerHTML = VALUES[i][2]

            PRODUCTO.appendChild(ITEM_PROD)
            PRODUCTO.appendChild(PRECIO_PROD)

            LISTA.appendChild(PRODUCTO)
        }
    }).catch((error)=>{
        alert("Menu no actualizado")

    })

})


