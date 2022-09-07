import NotificationButton from './components/NotificationButton'
import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {
  return (
    <>
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
