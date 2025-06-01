import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Footer from "./components/Footer"
function App(){
  return(
    <div className="App">
      <Header/>
      <Hero/>
      <Menu/>
      <Gallery/>
      <About/>
      <Footer/>
      <h1>My Cafe Website</h1>
      <p>Welcome to our cozy cafe!</p>
    </div>
  )
}

export default App