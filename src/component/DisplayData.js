import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import '../css/displayData.css'

function DisplayData() 
{
    let [grade,setGrade]=useState('')
    let [studentData,setStuData]=useState([])
    let [above60,setAbove]=useState([])

    useEffect(()=>{

    },[])

    function submit(e)
    {
        e.preventDefault()
        console.log(grade);
        fetch(`https://student-backend-iqqx.onrender.com/getData/${grade}`)
       .then((data)=>data.json())
       .then((res)=>{
           console.log(res)
           setStuData(res)
       })
       .catch(()=>console.log('error'))


       //above 60

       fetch(`https://student-backend-iqqx.onrender.com/getData/above60/${grade}`)
       .then((data)=>data.json())
       .then((res)=>{
           console.log(res)
           setAbove(res)
       })
       .catch(()=>console.log('error'))

       setGrade('')
    }

    return <>
      <Nav></Nav>
        <form className="row g-3" style={{marginTop:"30px"}} onSubmit={(e)=>submit(e)}>
            <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label"><h5 style={{textDecoration:'underLine'}}>Select Standard</h5></label>
                {/* <input type="text" className="form-control" id="validationDefault01" value="Mark" required/> */}
                <select name="standard" className="form-control" id="validationDefault01" value={grade} onChange={(e)=>setGrade(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                </select>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit" >Submit</button>
                {/* <button className="btn btn-primary" type="submit" onClick={submit}>Submit</button> */}
            </div>
        </form>
        <div className="tableData">
            <div className="box1">
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Student Name</th>
                        <th>Math's</th>
                        <th>Science</th>
                        <th>History</th>
                        <th>Geography</th>
                        <th>English</th>
                        <th>Marathi</th>
                        <th>Total Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((data,index)=>(<tr>
                        <td>{index}</td>
                        <td>{data.name}</td>
                        <td>{data.maths}</td>
                        <td>{data.sci}</td>
                        <td>{data.history}</td>
                        <td>{data.geography}</td>
                        <td>{data.eng}</td>
                        <td>{data.marathi}</td>
                        <td>{data.percentage}%</td>
                    </tr>))}
                </tbody>
            </table>
            </div>
            <div className="box2">
                <h4 style={{textDecoration:"underLine",textAlign:'center'}}>Students above 60%</h4>
                <dib className="above60">
                    {above60.map((data)=><li><b>{data.name}:{data.percentage}%</b></li>)}
                </dib>
            </div>
        </div>
    </>
}

export default DisplayData