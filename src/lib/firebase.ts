import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB5UdT_ZxV7kX1jKgdTJ2fPlZkxTa-zlM0',
  authDomain: 'diablo-party-finder.firebaseapp.com',
  projectId: 'diablo-party-finder',
  // rest of your config
}

let app

if (!getApps().length) {
  app = initializeApp(config)
} else {
  app = getApps()[0] // if already initialized, use that one
}

const auth = getAuth(app)

export { auth }
