import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: 'Knox-UI',
  description: 'A corporate-focused UI component library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="bg-base-200 text-gray-900 dark:text-white">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-grow bg-base-100 rounded-tl-lg p-2">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}

