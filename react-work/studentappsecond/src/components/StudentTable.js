export default function StudentTable({studentList,acitveBranch}){
    return <>
      <table className="table">
            <thead>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {studentList.filter((student)=>acitveBranch=="all" || student.branch==acitveBranch).map((student,index)=><tr key={index}>
                    <td>{student.roll}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.mobile}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}