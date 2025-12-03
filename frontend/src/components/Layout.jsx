import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LiveChat from './LiveChat'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <LiveChat />
    </div>
  )
}

export default Layout
