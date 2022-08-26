import React from 'react'
import mc from '../src/Makecall.jpeg'
import ml from '../src/mail.jpeg'
import ll from '../src/location.png'
import igm from '../src/instagram.png'
import fbk from '../src/facebook.png'
import twr from '../src/twitter.jpg'
const Contact = () => {
  return (
    
<div className=' justify-content-center d-flex  mt-5'>

<div className=' shadow w-30 p-5  bg-body rounded'>
 
 <div className=' d-flex'>
<img className=' rounded' src={mc} alt='phonecall' width={40} height={30}  ></img> <p className='user-select-all p-1 fw-bold '>7502361606</p></div>
<div className='d-flex'>
<img className='rounded' src={ml} alt='maillogo' width={40} height={30}></img><p className='user-select-all p-1 fw-bold'>msmano235@gmail.com</p>
</div>
<div className='d-flex'>
<img className='rounded' src={ll} alt='maillogo' width={40} height={30}></img><p className='user-select-all p-1 fw-bold'> Ayyampettai</p>
</div>
<div className='d-flex'>
<img className='m-1 rounded' src={igm} alt='maillogo' width={40} height={30}></img>
<img className='m-1 rounded' src={fbk} alt='maillogo' width={40} height={30}></img>
<img className='m-1 rounded' src={twr} alt='maillogo' width={40} height={30}></img>
</div>

</div>
</div>
    
  )
}
export default Contact