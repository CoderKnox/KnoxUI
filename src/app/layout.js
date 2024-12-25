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
        <body className="bg-base-200 text-gray-900 dark:text-white pr-2">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-grow bg-base-100 w-full h-full rounded-lg p-2 min-h-[calc(100vh_-_60px)]">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}

