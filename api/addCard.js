import initSDK from "../firebase/init"
import firebaseAdmin from "firebase-admin"

export default async function addCard(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  )
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
