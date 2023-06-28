import React, { useState } from 'react'
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/enterData.css'

function EnterData() {
    let [data, setData] = useState({
        name: '',
        standard: '',
        dob: '',
        address: '',
        city: '',
        maths: 0,
        sci: 0,
        history: 0,
        geography: 0,
        eng: 0,
        marathi: 0
    })

    function enter(e, prop) {
        setData((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    function enterMarks(e, prop) {
        setData((data) => ({
            ...data,
            [prop]: e.target.value
        }))
    }

    function submit() {
        console.log(data);
        fetch('https://student-backend-iqqx.onrender.com/data', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((responce) => console.log(responce))
            .catch(() => console.log("uploading error"))

        setData({
            name: '',
            standard: '',
            dob: '',
            address: '',
            city: '',
            maths: 0,
            sci: 0,
            history: 0,
            geography: 0,
            eng: 0,
            marathi: 0
        })
    }

    return <>
        <Nav></Nav>
        <h4 style={{marginLeft:'630px',textDecoration:'underLine'}}>Enter student details</h4>
        <div className="box">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name <sup>*</sup></label>
                    <input type="text" value={data.name} className="form-control" id="inputEmail4" placeholder='jone doe' onChange={(e) => enter(e, 'name')} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Date of Birth <sup>*</sup></label>
                    <input type="text" className="form-control" id="inputPassword4" value={data.dob} placeholder='mm/dd/yy' onChange={(e) => enter(e, 'dob')} required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Standard/Class <sup>*</sup></label>
                    <input type="text" className="form-control" id="inputAddress2" value={data.standard} onChange={(e) => enter(e, 'standard')} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address <sup>*</sup></label>
                    <input type="text" className="form-control" id="inputAddress" value={data.address} placeholder="1234 Main St" onChange={(e) => enter(e, 'address')} required />
                </div>
                {/* <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div> */}
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label" required>City <sup>*</sup></label>
                    <input type="text" className="form-control" id="inputCity" value={data.city} onChange={(e) => enter(e, 'city')} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>

                <h4 className='heading'>Enter your marks hear</h4>
                <div className="tab">
                    <table>
                        <thead>
                            <tr>
                                <th style={{border:'none'}}>Mathematics <sup>*</sup></th>
                                <th style={{border:'none'}}>Sciencs <sup>*</sup></th>
                                <th style={{border:'none'}}>History <sup>*</sup></th>
                                <th style={{border:'none'}}>Geography <sup>*</sup></th>
                                <th style={{border:'none'}}>English <sup>*</sup></th>
                                <th style={{border:'none'}}>Marathi <sup>*</sup></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.maths} onChange={(e) => enter(e, 'maths')} max={100} required /></td>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.sci} onChange={(e) => enter(e, 'sci')} max={100} required /></td>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.history} onChange={(e) => enter(e, 'history')} max={100} required /></td>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.geography} onChange={(e) => enter(e, 'geography')} max={100} required /></td>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.eng} onChange={(e) => enter(e, 'eng')} max={100} required /></td>
                                <td style={{border:'none'}}><input type="number" className='marks' value={data.marathi} onChange={(e) => enter(e, 'marathi')} max={100} required /></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
        </div>
    </>
}

export default EnterData;