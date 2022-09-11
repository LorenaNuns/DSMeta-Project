import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <main>
        <section id="sales">
          {/*  A 1º div controla a largura do retangulo  e o 2º as composições dentro do div */}
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
