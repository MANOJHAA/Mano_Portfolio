import React from 'react'
import Contact from './Contactme'
import Res from './Resume'
import Aboutme from './Aboutme';
import {Link,Routes,Route} from 'react-router-dom';



 const About = () => {
  return (
    
         <div className='container mt-5'>

<div className=' shadow p-3  bg-body rounded'>
 
<div className='nav text-capitalize '>
<Link className=' text-decoration-none active text-body col-sm-4 text-center h5' exact to='/'>Home</Link>
<Link  className='text-decoration-none col-sm-4 text-center text-body  h5' to='r' >Resume</Link>
<Link className='text-decoration-none text-body col-sm-4 text-center h5' to='cm'>Contact Me</Link>
</div>





</div>

<Routes>
<Route exact path='/' element={<Aboutme/>}/>
<Route  path='r' element={<Res/>}/>
<Route  path='cm' element={<Contact/>}/>
</Routes> 
    </div>
  )
}
export default About