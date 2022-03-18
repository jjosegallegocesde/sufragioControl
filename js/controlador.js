import { addDoc, collection,getDocs  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {db} from './firebase.js'
import {llenarSala} from './llenado.js'


const estudiantes = await getDocs(collection(db, "estudiantes"));
llenarSala(estudiantes)





