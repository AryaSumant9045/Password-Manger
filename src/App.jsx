
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Navbar/>
      {/* fixed to viewport — always visible as you scroll */}
<div className="fixed inset-0 -z-10 w-full bg-white
  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
  bg-[size:6rem_4rem] bg-fixed">
  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
</div>
      <Manager/>
      <Footer/>
    <div></div>
    </>
  )
}

export default App
