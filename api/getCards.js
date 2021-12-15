const initSDK = require("../firebase/init")
const firebaseAdmin = require("firebase-admin")
const allowCors = require("../util/allowCors")

async function handler(req, res) {
  try {
    initSDK()
    const cards = await firebaseAdmin.firestore().collection("cards").get()
    res.json(cards.docs.map((i) => i.data()))
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "F" })
  }
}

module.exports = allowCors(handler)
