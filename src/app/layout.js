import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Drawing Tool',
  description: 'You can draw any drawing , erase ,back, next and  download it ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
