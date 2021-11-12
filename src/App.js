
import './App.css';
import ClassState from "./components/Compteur basique/ClassState";
import BoilingVerdict from './components/convertisseur/BoilingVerdict';
import Calculator from './components/convertisseur/Calculator';
import Formulaire from './components/Formulaires/Formulaire';
import FunctionState from './components/Compteur basique/FunctionState';
import Timer from './components/Timers/Timer';
import Timertwo from './components/Timers/Timertwo';
import Todo from './components/Todo liste/Liste avec fonctions/Todo';
import Count from './components/useReducer/Count'
import FilterableProductTable from './components/ListeProduits/FilterableProductTable'
import AffichageCompteur from './components/UseEffect/AffichageCompteur';
import Base from './components/Modal/Base';
import Base2 from './components/Modal/Base2';
import Affichage from './components/Formulaire2/Affichage';
import Rendu from './components/rendu conditionnel/Rendu'
import Curseur from './components/Curseur_useRef/curseur';
import Teste from './Test/teste';
import TodoClass from './components/Todo liste/Liste avec class/TodoClass';





function App() {


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
    <TodoClass />
    <hr />
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
    <hr/>
    <AffichageCompteur/>
    <hr/>
    <Base/>
    <hr/>
    <Base2/>
    <hr/>
    <Affichage/>
    <hr/>
    <Rendu/>
    <hr/>
    <Curseur/>
    <hr/>
    <Teste/>

    </div>
    
    


  );
}

export default App;
