
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import style from './app.module.css'


function App() {


  return (
    <div className={style.mainPage}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
