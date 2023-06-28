import logo from './logo.svg';
import './App.css';
import EnterData from './component/EnterData';
import DisplayData from './component/DisplayData';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
    return <>
       {/* <EnterData></EnterData> */}
       {/* <DisplayData></DisplayData> */}
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<EnterData></EnterData>}></Route>
             <Route path='/getData' element={<DisplayData></DisplayData>}></Route>
          </Routes>
       </BrowserRouter>
    </>
}

export default App;
