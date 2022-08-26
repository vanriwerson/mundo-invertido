import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'; // mesma versão do initializeApp

console.log(app);

export async function subscribeToHellfireClub(subscription) {
  // Acessa o banco de dados (schema)
  const db = getFirestore(app);
  // Referencia a coleção (table)
  const hellfireClubCollection = collection(db, 'hellfire-club');
  // Realiza a inserção dos dados
  const docRef = await addDoc(hellfireClubCollection, subscription);

  return window.alert(`Incrição realizada com id ${docRef.id}.`);
};