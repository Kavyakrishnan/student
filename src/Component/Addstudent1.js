import React from 'react'

const Addstudent1 = () => {
  return (
   <div className='container'>

<div className="row g-2">
    <div className="col">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">

<label for="" className="form-label">Name</label>
<input placeholder="Enter Name" type="text" className="form-control"/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
            <label for="" className="form-label">Roll No</label>
<input placeholder="Enter Roll No" type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
            <label for="" className="form-label">Admission No</label>
            <input placeholder="Admission No" type="text" className="form-control"/>
                    
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
            <label for="" className="form-label">University No</label>
            <input placeholder="University No" type="text" className="form-control"/> 
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
            <label for="" className="form-label">College</label>
            <input placeholder="College" type="text" className="form-control"/>
        </div>
              <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
              <button class="btn btn-success">Register</button>
             
        </div>
    </div>
    </div>
    
</div>

    </div>
  
    

   </div>
  )
}

export default Addstudent1