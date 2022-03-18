export function llenarSala(estudiantes){

    let fila=document.getElementById("fila")

    estudiantes.forEach((estudiante) => {

        let columna=document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card",'h-100','p-3')
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top","w-50","mx-auto","d-block","my-4")
        foto.src="img/pc.png"
    
        let nombre=document.createElement("h4")
        nombre.classList.add("text-center","text-muted")
        nombre.textContent=estudiante.data().nombre

        let tituloPC=document.createElement("h3")
        tituloPC.classList.add("text-center","fw-bold")
        tituloPC.textContent="Computador N°: "

    
        let pc=document.createElement("input")
        pc.classList.add("form-control","w-25","mx-auto","d-block","mb-2")
        pc.setAttribute("value",estudiante.data().computador)
        
    
        let textoArea=document.createElement("textarea")
        textoArea.classList.add("form-control")
        textoArea.textContent="Lorem ipsum dolor sit amet"
    
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("button","btn","btn-outline-primary","mx-5","my-3")
        boton.textContent="Editar"
    
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(tituloPC)
        tarjeta.appendChild(pc)
        tarjeta.appendChild(textoArea)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    });
  
}

