import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings" ;
import Random from "./components/Random";
import BoxColor from './components/BoxColor';



function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={"1992-07-14"}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={"1988-05-11"}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<h1>Greetings</h1>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings> 

<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} class="border border-dark w-25 d-flex">rgb(255,0,0)</BoxColor>
<BoxColor r={128} g={255} b={0} class="border border-dark w-25">rgb(128,255,0)</BoxColor>





    </div>
  );
}

export default App;
