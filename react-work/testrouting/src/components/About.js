import Header from "./Header";

export default function About(){
    return <>
       <Header/>
       <div className="mt-5 container d-flex justify-content-center align-items-center" style={{height:"500px"}}>
          <div className="box">
            <h1>About Component</h1>
          </div>
       </div>
    </>
}