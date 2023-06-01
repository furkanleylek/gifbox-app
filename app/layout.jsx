import '@/styles/global.css'
import { Inter, Roboto_Mono, Open_Sans, Mate_SC } from '@next/font/google'
import Navbar from '@/components/navbar'
import Provider from '@/components/context'
import Footer from '@/components/footer'
import classNames from 'classnames'

const sans = Open_Sans({ subsets: ['latin'] })
const mono = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames('w-full h-full flex flex-col gap-0  md:overflow-y-hidden bg-zinc-900', sans.className)}>
        <Provider>
          <div className='w-full h-full bg-zinc-900'>
            <Navbar />
          </div>
          <div className=' w-full h-full  md:overflow-y-auto'>
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}