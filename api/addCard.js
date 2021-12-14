import initSDK from "../firebase/init"
import firebaseAdmin from "firebase-admin"

export default async function addCard(req, res) {
  try {
    const ref = await firebaseAdmin
      .firestore()
      .collection("cards")
      .add(req.body)
    res.json({ id: ref.id })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Error" })
  }
}
