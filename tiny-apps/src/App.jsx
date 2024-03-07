import {Routes, Route} from 'react-router-dom';
import Nav  from './Components/Nav';  
import Page01 from './pages/01';
import Page02 from './pages/02';
import Page03 from './pages/03';
import Page04 from './pages/04';
import Page05 from './pages/05';

function App() {
  

  return (
    <>
    <header>
      <h1>Merhaba Dünya</h1>
      <Nav></Nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Page01/>}/>

        <Route path="/about-me" element={<h2>Burası hakkımda sayfa</h2>}/>
        <Route path="/tiny-quiz-app" element={<Page02/>}/>
        <Route path="/accordion" element={<Page03/>}/>
        <Route path="/tiktoktoe" element={<Page04/>}/>
        <Route path="/filterable-employees-table-final" element={<Page05/>}/>
        <Route path="*"npm  element={<h2>Nope :-[</h2>}/>

        

        
      </Routes>
      </main>
      <footer>
        <p>Kd-boost 18</p>
      </footer>
    </>
  )
}

export default App
