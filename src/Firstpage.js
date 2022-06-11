import './Firstpage.css';


const Firstpage =()=>{
    
    return(
        <>
          <h2>Welcome Visit for My Website  🤝</h2>
          <p className='para-heading'>This is Product Base site and all product available related Car vehical</p>
          <hr/>
           <div className='first-container'>
              <div className='description'>
                     <h1>Information of About Car 🚗</h1>
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

               </div>
               <div className='image-car'>
                    <img src="images/red.jpg" width="300px" height="200px"/>
               </div>
           </div>
           <hr/>
           
        </>
    )
}
export default Firstpage;