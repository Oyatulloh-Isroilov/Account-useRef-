import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Hero from './Hero';

function App() {

  function BasicExample() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          O'zb
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English(ishlamidi)</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Russian(ishlamidi)</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Turkiye(ishlamidi)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <img className='headerLogo' src="./darkor.png" alt="" />
        </div>
        <div className="headerMenu">
          <a className='headerLink' href="#">Vakansiyalar</a>
          <a className='headerLink' href="#">Kandidatlar</a>
          <a className='headerLink' href="#">Kompaniyalar</a>
          <a className='headerLink' href="#">Xizmatlar</a>
          <a className='headerLink' href="#">Ta'lim</a>
        </div>
        <div className="headerBtns">
          <BasicExample />
          <button className='startBtn'>Boshlash</button>
        </div>
      </div>

      <div className="hero">
        <Hero />
      </div>

    </>
  )
}

export default App
