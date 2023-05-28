'use client'

import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  color: ${(props) => props.theme.primaryColor};
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`

export default function Page() {
  return <div className='space-y-4'></div>
}
