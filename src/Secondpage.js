import './Secondpage.css';
import Data from './Data';
import Pagination from './Pagination';
import Fourthpage from './Fourthpage';
import Thirdpage from './Thirdpage';

import React,{useState} from 'react';
const Secondpage =()=>{
   
    const [check, setCheck] = useState([]);
    const [perpage, setPerpage] = useState(5);
    const [pages, setPages] = useState({
        start:0,
        end:perpage,
    });
    const onPaginatonChange = (start, end)=>{
        setPages({start:start, end:end});
    }

    const getValue =(e)=>{
        setCheck(e.target.value);
        
    }
    
    const para ="You select choose your product please check items right ya worng plesas match";
    return(
        <>
           {
               Data.slice(pages.start, pages.end).map((items)=>{
                   return(
                       <>
                           <div className='list-container'>
                           <div className='list-items'>
                                <img src={items.image} alt="car/jpg" className='list-img'/>
                                <h3 className='name'>{items.name}</h3>
                                <h3 className='price'>{items.price}</h3>
                                <a href="#">{items.View}</a>
                                <input type="checkbox" className='cheekBox' 
                                value={`${items.name} ${items.price} : ${para}`}
                                onClick={getValue}
                                />
                           </div>
                           </div>

                           
                       </>
                   )
               })
           }
           
           <Pagination showPerpage={perpage} onPaginatonChange={onPaginatonChange}/><br/>
           <Fourthpage text={check}/>
           <hr/>
           
           <Thirdpage/>
        </>
    )
}
export default Secondpage;