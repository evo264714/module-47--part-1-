import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'Singer3'},
  {name: 'Shuvro', job: 'Singer4'},
  
]


function App() {
  const nayoks = ['Rubel', 'Sakib', 'Mushfiq', 'Jashim', 'Salman', 'Riyaz', 'Razzak']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok =><Person name={nayok}></Person>)
      } */}


      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} hero="Rubel2"></Person>
      <Person name={nayoks[1]} hero="Sakib2"></Person>
      <Person name={nayoks[2]} hero="Mushfiq2"></Person> */}
      
      <h5>New Component</h5>
      <p>React is here!</p>

      <Friend movie="movie1" phone= "017777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.hero}</p>
  </div>
  );
}

function Friend (props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;
