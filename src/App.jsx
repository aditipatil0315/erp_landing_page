import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page5 from './components/Page5'
import Page4 from './components/Page4'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
    <div >
      <Navbar/>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </div>
  )
}

export default App