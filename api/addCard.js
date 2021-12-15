const initSDK = require("../firebase/init")
const firebaseAdmin = require("firebase-admin")
const allowCors = require("../util/allowCors")
async function handler(req, res) {
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

module.exports = allowCors(handler)
