import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

export const CreatUser = async ({name,lastName,email,password,role}) =>{
    const usuarios = {name,lastName,email,password,role};
    const db = getFirestore()
    const userCollection = collection(db,'usuarios')
    addDoc(userCollection,usuarios).then(({name,lastName,email,passord,id,role})=>{
        return {name,lastName,email,passord,id,role};
    })
}