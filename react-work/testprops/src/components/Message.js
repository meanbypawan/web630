export default function Message(props){
    // props : {wisingMessage: "Good Morning Friends.."}
    return <>
      <h3>It is message component...</h3>
      <b>{props.wishingMessage}</b>
      <br/>
      <b>Value of a : {props.a} and value of b : {props.b}</b>
      <button onClick={()=>props.sayHello()}>Say Hello</button>
    </>
}