import initSDK from "../firebase/init"
import firebaseAdmin from "firebase-admin"
export default async function getCards(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  try {
    initSDK()
    const cards = await firebaseAdmin.firestore().collection("cards").get()
    res.json(cards.docs.map((i) => i.data()))
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "F" })
  }
}
