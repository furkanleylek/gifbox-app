import '@/styles/global.css'
import SideBar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import Provider from '@/components/context'
import Footer from '@/components/footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full  h-screen flex flex-col md:flex-row gap-0  md:overflow-y-hidden bg-gradient-to-r from-zinc-800 via-gray-800 to-neutral-800'>
        <Provider>
          <SideBar />
          <Navbar />
          <div className='w-full h-full px-4 md:px-14 md:overflow-y-auto'>
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}