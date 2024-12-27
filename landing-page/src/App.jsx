
import './App.css'
import Navbar from './component/navbar'
import Herosection from './component/herosection'
import Feature from './component/Feature'
import Workflow from './component/Workflow'
import Prace from './component/Prace'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'

function App() {

  return(
   <>
   <Navbar/>
   <div className="mx-w-7xl mx-auto pt-20 px-6">
   <Herosection/>
   <Feature/>
   <Workflow/>
   <Prace/>
   <Testimonials/>
   <Footer/>
   </div>
 
   
   
   </>
  )
  
}

export default App
