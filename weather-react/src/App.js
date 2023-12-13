import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { TopButton } from './components/TopButton';
import { Inputs } from './components/Inputs';
import { TimeAndLocation } from './components/TimeAndLocation';
import { TemperaturaAndDetails } from './components/TemperaturaAndDetails';
import { Forecast } from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';

function App() {

  const fetchWeather = async ()=>{
    const data = await getFormattedWeatherData({q:"london"});
    console.log(data);
  };

  fetchWeather()

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400'>
      <TopButton/>
      <Inputs/>


      <TimeAndLocation/>
      <TemperaturaAndDetails/>

      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
