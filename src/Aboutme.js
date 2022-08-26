import React from 'react'
import hello from '../src/mano.jpeg'

const  Aboutme = () => {
  return (
    
         <div className='container mt-5'>

<div className=' shadow p-3  bg-body rounded'>
 

<div className='d-flex align-items-center justify-content-center '>
<h1 className='text-capitalize col-sm-8'>manojkumar d<p className='text-primary '>Frontend Developer</p></h1>

<img className=' rounded float-end' src={hello} alt="hi" width={350} /> 
 
</div>

</div>
</div>
    
  )
}

export default Aboutme