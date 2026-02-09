import Header from './components/navigation/Header.jsx'
import Aside from './components/navigation/Aside.jsx'
import Footer from './components/navigation/Footer.jsx'
import WhatsAppFAB from './components/others/WsFab.jsx'

function App() {
  return (
    <>
      <div
        id='app'
        className="flex flex-col min-h-screen p-2 gap-2
        md:grid
        md:grid-areas-layout
        md:grid-cols-[260px_1fr]
        md:grid-rows-[auto_1fr_auto]"
      >

        <header className='md:[grid-area:header]'>
          <Header />
        </header>

        <aside className='hidden md:block md:[grid-area:aside]'>
          <Aside />
        </aside>

        <main className='md:[grid-area:main] flex'>
          <h1 className="font-bold text-3xl"></h1>
        </main>

        <footer className='md:[grid-area:footer]'>
          <Footer />
        </footer>
      </div>

      <WhatsAppFAB/>
    </>
  )
}

export default App