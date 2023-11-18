import { Component } from "react";

export default class TestBinding extends Component{
    render(){
        let data = 100;
        let status = false;
        let pointList = [20,10,5,45,90,100,56];
        return <div>
            <h1>It is TestBinding Component...</h1>
            <span>{data}</span>
            {status ? <div>
                <span>Indore</span>
                <span>Jabalpur</span>
                <span>Ratlam</span>
            </div> :<div>
              <span>Pune</span>
              <span>Mumbai</span>
            </div>}
            <hr/>
            {pointList.map((element,index)=><p>{element}</p>)}
        </div>
    }
}