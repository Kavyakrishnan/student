import React from 'react'

const Searchstudent = () => {
  return (
    <div className='container'>
    <div>
     <div className="row g-2">
    <div className="col">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
    <div className="row g-3">
        
        
       
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
            <label for="" className="form-label">University No</label>
            <input placeholder="University No" type="text" className="form-control"/> 
        </div>
        
              <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
              <button class="btn btn-success">Search</button>
             
        </div>
    </div>
    </div>
    
</div></div>

    </div>   
    </div>
  )
}

export default Searchstudent