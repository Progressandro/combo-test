import initSDK from "../firebase/init"
import firebaseAdmin from "firebase-admin"
export default async function getCards(req, res) {
  try {
    initSDK()
    const cards = await firebaseAdmin.firestore().collection("cards").get()
    res.json(cards.docs)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "F" })
  }
}
