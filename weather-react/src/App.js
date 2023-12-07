import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { TopButton } from './components/TopButton';
import { Inputs } from './components/Inputs';
import { TimeAndLocation } from './components/TimeAndLocation';
import { TemperaturaAndDetails } from './components/TemperaturaAndDetails';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400'>
      <TopButton/>
      <Inputs/>


      <TimeAndLocation/>
      <TemperaturaAndDetails/>
    </div>
  );
}

export default App;
