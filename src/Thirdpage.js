import React,{useState} from 'react';
import './Thirdpage.css';
const Thirdpage =()=>{
    const[select, setSelect] =useState();
    const selectValue =(e)=>{
        setSelect(e.target.value);
  }
   const sidemirror ="Side Mirror is best quality and 100% good quality product  price is $ 650";
   const frontmirror ="Front Mirror is best quality and 100% sure product  price is $ 450";
   const seats ="Seat is best quality and 100% good quality product  price is $ 350";
   const wheel ="wheel is best quality and 100% baranty product  price is $ 870";
   const frontlight ="Front Light is best quality and 100% baranty product  price is $ 1050";
   const Handle ="Handle is best quality and 100% baranty product  price is $ 100";
   const Frame ="Frame is best quality and 100% baranty product  price is $ 930";
   const Cardoorhandle =" car door handle is best quality and 100% baranty product  price is $ 100";
   const CarRim ="Car Rim is best quality and 100% baranty product  price is $ 650";
    return(
        <>
           <div className='drag-down'>
           <select onChange={selectValue}>
                 <option  value={sidemirror}>Side Mirror</option>
                 <option  value={frontmirror}>Front Mirror</option>
                 <option  value={seats}>Seats</option>
                 <option  value={wheel}>Wheel</option>
                 <option  value={frontlight}>Front Light</option>
                 <option  value={Handle}>Handle</option>
                 <option  value={Frame}>Frame</option>
                 <option  value={Cardoorhandle}>Car door handle</option>
                 <option  value={CarRim}>Car Rim</option>
           </select>
           <p className='para-select'>{select}</p>
           </div>
           
        </>
    )
}
export default Thirdpage;