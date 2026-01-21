import EinsteinEquation from './components/EinsteinEquation';
import TriangleRule from './components/TriangleRule';
import CylinderCalc from './components/CylinderCalc';
import ParabolaFormula from './components/ParabolaFormula';
import BinomialSquare from './components/BinomialSquare';
import HydrogenOxide from './components/HydrogenOxide';
import LogBase from './components/LogBase';
import './App.css';

const App = () => {
  return (
    <ol>
      <EinsteinEquation />
      <TriangleRule />
      <CylinderCalc />
      <ParabolaFormula />
      <BinomialSquare />
      <HydrogenOxide />
      <LogBase />
    </ol>
  );
};

export default App;
