'use client'

import { signInWithGoogle } from '@/auth/authService'
import styled from 'styled-components'
import { auth } from '@/lib/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Loading from './components/Loading'
// const Container = styled.div`
//   display: grid;
//   color: ${(props) => props.theme.primaryColor};
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   gap: 1.5rem /* 24px */;
// `

export default function Page() {
  const provider = new GoogleAuthProvider()

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  }

  const router = useRouter()

  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loading />
  }

  if (user) {
    router.push('/browser')
  }

  return (
    <div className='space-y-4'>
      mainpage :D
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}
