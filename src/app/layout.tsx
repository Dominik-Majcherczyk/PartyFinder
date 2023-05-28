'use client'
import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/theme/theme'
import { GlobalStyle } from './GlobalStyle'
import './/styles/globals.css'

import { ThemeProvider } from 'styled-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  )
}
