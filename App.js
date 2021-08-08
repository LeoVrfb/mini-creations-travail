
import './App.css';
import ClassState from "./components/ClassState";
import BoilingVerdict from './components/convertisseur/BoilingVerdict';
import Calculator from './components/convertisseur/Calculator';
import Formulaire from './components/Formulaires/Formulaire';
import FunctionState from './components/FunctionState';
import Timer from './components/Timers/Timer';
import Timertwo from './components/Timers/Timertwo';
import Todo from './components/Todo';
import Count from './components/useReducer/Count'
import FilterableProductTable from './components/ListeProduits/FilterableProductTable'





function App({products}) {


  const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  return (
    <div className="container">
      
    <h1> useState Hook
    </h1>
    <ClassState />
    <hr/>
    <FunctionState />
    <hr/>
    <Todo/>
    <hr/>
    <Count/>
    <hr/>
    <Timer/>
    <Timertwo/>
    <hr/>
    <Formulaire/>
    <hr/>
    <Calculator/>
    <hr/>
    <FilterableProductTable products={PRODUCTS}/>
    </div>
    
    


  );
}

export default App;
