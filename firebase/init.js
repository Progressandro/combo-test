var admin = require("firebase-admin")

var serviceAccount = require("../serviceAccountKey")

async function initSDK() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }
}

module.exports = initSDK
