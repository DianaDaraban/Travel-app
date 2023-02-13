import TravelFunc1 from './components/TravelFunc1'
import TravelFunc2 from './components/TravelFunc2'
import TravelClass1 from './components/TravelClass1'
import TravelClass2 from './components/TravelClass2'

function App() {
  return (
    <div className="App">
      <TravelFunc1 price={500} />
      <TravelFunc2 title={'Component'} price={800} />
      <TravelClass1 />
      <TravelClass2 />
    </div>
  )
}

export default App
