import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  const sayHello = ()=>{
    window.alert("Hello Friends...");
  }
   return <>
     <h1>It is App Component</h1>
     <hr/>
     <Message sayHello={sayHello} wishingMessage="Good Morning Friends..." a={10} b={20}/>
   </>
}

export default App;
