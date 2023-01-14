import './App.css';
import Meal from './Components/Meal';
import { Route, Routes } from 'react-router-dom';
import RecepeInfo from './Components/RecepeInfo';

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<RecepeInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
