import { useEffect, useState } from "react";
import './Pagination.css';
const Pagination =({showPerpage, onPaginatonChange})=>{
    const [count, setCount] = useState(1);
    useEffect(()=>{
        const value = showPerpage * count;
        onPaginatonChange(value - showPerpage, value);

    },[count])
    return(
        <div className="btn">
          <button onClick={()=>setCount(count - 1)}></button>
          <button onClick={()=>setCount(count + 1)}></button>
        </div>
    )
}
export default Pagination;