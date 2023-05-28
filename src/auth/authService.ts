import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'
const provider = new GoogleAuthProvider()

async function signInWithGoogle(): Promise<void> {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    // @ts-ignore
    console.log(error.message)
  }
}

export { signInWithGoogle }
