import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Subscription from './Components/Subscription';
import AllCards from './Components/Navbar/AllCards';

function App() {
  return (
    <div>
<div className='div'>
  <Navbar/>
  <Subscription/>

</div>
<AllCards/>
    </div>
  );
}

export default App;
