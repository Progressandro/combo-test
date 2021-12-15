var admin = require("firebase-admin")

var serviceAccount = require("../serviceAccountKey.json")

async function initSDK() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }
}

module.exports = initSDK
