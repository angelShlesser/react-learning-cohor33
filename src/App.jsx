import './App.css';
import Button from './components/Button/Button';

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  const nameOfCard = "Animal";

  const animal = {
    name:"Tiger",
    age:15,
    scr: "https://th.bing.com/th/id/R.d079c8f682b22211b84303a8f9ee2d23?rik=l9yLYZJ649TUTw&pid=ImgRaw&r=0",
    isWild: true
  }

  return <div className="App">
  <p>React app lesson 17</p>
  <div className='button-container'>
  <Button />
  <Button />
  <Button />
    </div>
    <div className='car-card'>
      <h3>{nameOfCard}</h3>
      <img src={animal.scr} alt='Tiger image'/>
      <p>Name: {animal.name}</p>
      <p>Age: {animal.age}</p>
      <p>Habitat: {animal.isWild ? "Wild" : "No Wild"}</p>
    </div>
  </div>
}

export default App;
