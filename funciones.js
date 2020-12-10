

function addNota(){
  
    tituloNota=document.getElementById('inputTitulo').value;
    contenido=document.getElementById('inputContenido').value;
    temaNota=document.getElementById('inputTipo').value;

   
    //clases, id, etiquetas
    contenedor=document.getElementById('pizzaron');


   
    var divnota=document.createElement("div")
    var p=document.createElement("p")
    var divcontenedor=document.createElement("div")
    var p2=document.createElement("div")

    divnota.className="nota"
    divcontenedor.className="contenedorDescripcion"
    p.innerText=tituloNota
    p2.innerText=contenido

    
 divnota.appendChild(p)
 divcontenedor.appendChild(p2)

 divnota.appendChild(divcontenedor)
 contenedor.appendChild(divnota)

}
