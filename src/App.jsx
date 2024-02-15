import './App.css';
// import Button from './components/Button/Button';
import ProfileCard from "./components/ProfileCard"

const user = [
  {
    src: 'https://thumbs.dfs.ivi.ru/storage15/contents/b/4/a946f905a27cd1019e8b216a7c9d78.jpg',
    name: 'Крис',
    lastName: 'Прэтт',
    occupation: 'Актер',
    growth: '188 см',
    hairColor: 'Cветло-каштановые',
    hobby: 'Рыбалка, охота, спорт, активности на свежем воздухе'
  },
  {
    src: 'https://www.kinogallery.com/pimages/1604/kinogallery.com-1604-447000.jpg',
    name: 'Аманда',
    lastName: 'Пит',
    occupation: 'Актриса',
    growth: '168 см',
    hairColor: 'Черные волосы',
    hobby: 'Фотография природы и путешествия'
  },
  {
    src: 'https://img04.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/e/00/e00386360d2665128f8164d10a69a944.png',
    name: 'Сандра',
    lastName: 'Баллок',
    occupation: 'Актриса и ресторатор',
    growth: '171 см',
    hairColor: 'Тёмно-каштановый',
    hobby: 'Кулинарное и предпринимательское чутье'
  },
]

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  // const nameOfCard = "Animal";

  // const animal = {
  //   name:"Tiger",
  //   age:15,
  //   scr: "https://th.bing.com/th/id/R.d079c8f682b22211b84303a8f9ee2d23?rik=l9yLYZJ649TUTw&pid=ImgRaw&r=0",
  //   isWild: true
  // }

  return <div className='page_wrapper'>
    {
      user.map((user,i) => {
        return <ProfileCard 
        key={i}
        src={user.src}
        name={user.name}
        lastName={user.lastName}
        occupation ={user.occupation}
        growth={user.growth}
        hairColor={user.hairColor}
        hobby={user.hobby}
        />
      })
    }
  </div>
  // <div className="App">
  // // <p>React app lesson 17</p>
  // // <div className='button-container'>
  // // <Button />
  // // <Button />
  // // <Button />
  // //   </div>
  // //   <div className='car-card'>
  // //     <h3>{nameOfCard}</h3>
  // //     <img src={animal.scr} alt='Tiger image'/>
  // //     <p>Name: {animal.name}</p>
  // //     <p>Age: {animal.age}</p>
  // //     <p>Habitat: {animal.isWild ? "Wild" : "No Wild"}</p>
  // //   </div>
  // //   <ProfileCard />
  // // </div>
}

export default App;
