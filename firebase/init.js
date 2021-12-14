var admin = require("firebase-admin")

var serviceAccount = require("./serviceAccountKey.json")

export default async () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }
}
