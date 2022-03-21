import { updateDoc , doc, collection,getDocs  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {db} from './firebase.js'
import {llenarSala} from './llenado.js'


const estudiantes = await getDocs(collection(db, "estudiantes"));
llenarSala(estudiantes)


let contenedorFila=document.getElementById("fila")
contenedorFila.addEventListener("click",function(event){

    let numeroPC,novedad,estudianteID

    if(event.target.classList.contains("btn")){

    
        if(event.target.parentElement.querySelector("input").value==""){
            numeroPC="NAN"
        }else{
            numeroPC=event.target.parentElement.querySelector("input").value
        }

        if(event.target.parentElement.querySelector("textarea").value==""){
            novedad=""
        }else{
            novedad=event.target.parentElement.querySelector("textarea").value
        }


        estudianteID=event.target.parentElement.querySelector("p").textContent


        const estudiante = doc(db, "estudiantes",  estudianteID);

        try{

            editar(estudiante,novedad,numeroPC)
            alert("Exito editando el computador asignado")

        }catch(e){
            alert("Upss intente nuevamente")
        }
       
       

        async function editar(referencia,novedad,numeroPC){

            console.log(novedad)

            await updateDoc(referencia, {
                computador: numeroPC,
                novedad:novedad
              });

        }
        


    }

})





