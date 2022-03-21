import { updateDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

export async function editarEstudiante(referencia,novedad,numeroPC){

   

    await updateDoc(referencia, {
        computador: numeroPC,
        novedad:novedad
    });




}