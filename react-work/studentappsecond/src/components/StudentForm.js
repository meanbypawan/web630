export default function StudentForm({setRoll,setName,setBranch,setMobile,acitveBranch,setActiveBranch,branchList,setBranchList,addNewRecord,studentList}){
    return <>
       <div className="row mt-2 mb-2">
            <div className="col-md-6">
                <input onChange={(event)=>setRoll(event.target.value)} type='text' placeholder='Enter Roll Number' className="form-control"/>
            </div>
            <div className="col-md-6">
                <input onChange={(event)=>setName(event.target.value)} type='text' placeholder='Enter Student name' className="form-control"/>
            </div>
        </div>
        <div className="row mt-2 mb-2">
            <div className="col-md-6">
              <select className="form-control" onChange={(event)=>setBranch(event.target.value)}>
                <option>Select Branch</option>
                {branchList.map((branch,index)=><option key={index}>{branch}</option>)}
              </select>
            </div>
            <div className="col-md-6">
                <input onChange={(event)=>setMobile(event.target.value)} type='text' placeholder='Enter Student Contact Number' className="form-control"/>
            </div>
        </div>
        <div className="row mt-2 mb-2">
            <div className="col-md-6">
                <button onClick={addNewRecord} className="btn btn-success">ADD</button>
            </div>
            <div className="col-md-6">
                <button onClick={()=>setActiveBranch("CS")} className="btn btn-danger ml-2">CS({studentList.filter((student)=>student.branch=="CS").length})</button>
                <button onClick={()=>setActiveBranch("IT")} className="btn btn-info ml-2">IT({studentList.filter((student)=>student.branch=="IT").length})</button>
                <button onClick={()=>setActiveBranch("EC")} className="btn btn-warning ml-2">EC({studentList.filter((student)=>student.branch=="EC").length})</button>
                <button onClick={()=>setActiveBranch("MECH")} className="btn btn-dark ml-2">MECH({studentList.filter((student)=>student.branch=="MECH").length})</button>
                <button onClick={()=>setActiveBranch("all")} className="btn btn-secondary ml-2">Total({studentList.length})</button>
            </div>
        </div>
    </>
}