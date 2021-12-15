import initSDK from "../firebase/init"
import firebaseAdmin from "firebase-admin"
import allowCors from "../util/allowCors"
function handler(req, res) {
  try {
    initSDK()
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

export default allowCors(handler)
