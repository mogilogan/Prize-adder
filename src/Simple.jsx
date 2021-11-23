import React, { useState } from 'react'
import Advance_page from "./Advance"

const Simple = () => {
    const[ method , setmethod ] = useState("")
    
    const[ Showrank , setshowrank ]=useState(false)
    const [showrange  , setshowrange] = useState(false)
    const [data , setdata]= useState({
        rank:"",
        prize:""
    })

    const [rangedata  , setrangedata ]=useState({
        rangeto:"",
        rangefrom:"",
        prize:""

    })
    const [printdata , setprintdata]=useState([])
    const [printrange , setprintrange] = useState([])

    const MethodChecker = () =>{
        if( method==="Advance"){
            return <Advance/>

        }else{
            return <Simple/>
        }
    }



    

  


    

    const Simple =()=>{
        const [mode , setmode] = useState("")
        
        const eventHandle = (e)=>{
            const value = e.target.value;
            const name = e.target.name;
    
            setdata({...data,[name]:value})  
            
        }
    
        const eventHandle2 = (e)=>{
            const value = e.target.value;
            const name = e.target.name;
    
            setrangedata({...rangedata,[name]:value})  
        }

        const sendData = ()=>{

            if(!data){
             alert("please fill the data")
            }else{

                setprintdata((olditem)=>{
                    return [...olditem , data]
                })
            }

            setdata("")
        }

        const sendData2 = ()=>{

            if(!rangedata){
             alert("please fill the data")
            }else{

                setprintrange((olditem)=>{
                    return [...olditem , rangedata]
                })
            }

            setrangedata("")
        }




        const deleteItem = (index)=>{
                console.log(index);
             setprintdata(
                printdata.filter((ele , i)=>{
                    return i!==index
              })
             )               
        }

        const deleteItem2 = (index)=>{
            console.log(index);
         setprintrange(
            printrange.filter((ele , i)=>{
                return i!==index
          }))
                      
    }
        return (
           <div>
             <>
             <section onChange={(e) => { setmode(e.target.value) } }>
                <h4> Mode </h4>
                <input type="radio" value="Squad" name="mode" /> Squad
                <input type="radio" value="Duo" name="mode" /> Duo
                <input type="radio" value="solo" name="mode" /> solo
                <br />
            </section><br /><label htmlFor=""> Add Rank & Prize Amount </label><br /><button className="Add_Rank" onClick={() => { setshowrank(s => !s) } }> Add Rank </button><button className="Add_Range" onClick={() => { setshowrange(s => !s) } }> Add Range </button><br /><br />
      {/* rank ka section */}
        <div style={{display: Showrank ? 'block' :"none"}} >
            <input type="text" placeholder="enter your rank" name="rank" value = {data.rank} onChange={eventHandle}/>
            <input type="text" placeholder ="enter the amount" name="prize" value={data.prize} onChange={eventHandle}/>
            <button onClick={sendData}> +</button>
            <br />
            </div>
            {/* *************************range ka secrtion***************************** */}
            <div style={ {display:showrange? "block ":"none" }} >
                   <div className="mainrange">
                   <input type="numder" placeholder="range" name="rangeto" value={rangedata.rangeto} onChange={eventHandle2} />
                    <p>to</p>
                    <input type="numder" placeholder="range" name="rangefrom" value={rangedata.rangefrom}onChange={eventHandle2}/>
                    <input type="numder"  placeholder="prize" name="prize" value={rangedata.prize} onChange={eventHandle2}/>
                    <button onClick={sendData2} >+</button>
                   </div> 
                     </div>
                     {/* map method in rank */}
            {
                printdata.map((ele , index)=>{
                        return (
                            <>
                          <div className="mainrank" key = {index}>
                         <div className="rank">   <p>Rank : {ele.rank} </p>  </div>
                           <div className="prize"> <p> prize:{ele.prize}  </p></div>
                           <div className="inr"> <p>inr :{ele.prize*2}</p>   </div>
                           <button onClick={()=>{deleteItem(index)}} > <i class="zmdi zmdi-delete"></i></button>
                          </div>
                       </>

                        )
                })
            }

        
      
    

           
            {
                 printrange.map((ele , index)=>{
                    return (
                        <>
                      <div className="mainrank" key = {index}>
                     <div className="rank">   <p>Range : {ele.rangeto} </p>  </div>
                     <p>to</p>
                     <div className="rank">   <p>  {ele.rangefrom} </p>  </div>
                       <div className="prize"> <p> prize:{ele.prize}  </p></div>
                       <div className="inr"> <p>inr :{ele.prize*2}</p>   </div>
                       <button onClick={()=>{deleteItem2(index)}} > <i class="zmdi zmdi-delete"></i></button>
                      </div>
                   </>

                    )
            })
            }
            
           </>
           </div>
        )
    }
    

    const Advance = ()=>{
        return (
            <>
          <Advance_page/>
            </>
        )
    }

    
    return (
        <>
            <label htmlFor=""> Select your price </label>

          <div className="method">
           <section onChange={(e)=>{setmethod(e.target.value)}} >
              <h4> method </h4>
                <input type="radio" value="simple" name="method" /> simple
                 <input type="radio" value="Advance" name="method" /> Advance
               
                <br />
            </section>
         
          <div className="Mode">
          
            <br />
            <MethodChecker/>
            
            </div>
            </div>
        </>
    )
}

export default Simple