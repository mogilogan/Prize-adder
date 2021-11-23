import React, { useState } from 'react'



const Advance = () => {
    // for card
    const[ mvp  , setmvp ] = useState(false)
    const[ A_damage , setA_damage] = useState(false)
    const [A_kill , setA_kill] = useState(false)
    const [ Reviver , setReviver] = useState(false)
    const [greanadier , setgreanadier] = useState(false)
    const [clutcher  , setclutcher] = useState(false)
    const [sniper  , setsniper] = useState(false)
    
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
    
    const [mode , setmode] = useState("")

    const [advdata , setadvdata] = useState({
      mvp:"",
      top_assaulter_kill:"",
      top_assaulter_damage:"",
      top_reviver:"",
      top_greanadiar:"",
      top_clutcher:"",
      top_sniper:""
    })
        
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


    const eventHandle3 = (e)=>{
      const value = e.target.value;
      const name = e.target.name;

      setadvdata({...rangedata,[name]:value})  
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
        <>
         <section onChange={(e)=>{setmode(e.target.value)}} >
          <h4> Mode </h4>
            <input type="radio" value="Squad" name="mode" /> Squad
             <input type="radio" value="Duo" name="mode" /> Duo
            <input type="radio" value="solo" name="mode" /> solo 
            <br />
        </section>
        <br />
    <label htmlFor=""> Add Rank & Prize Amount </label>
    <br/>
    <button className="Add_Rank" onClick={()=>{setshowrank(s => !s)}} > Add Rank </button>
    <button className="Add_Range" onClick={()=>{setshowrange(s=> !s)}} > Add Range </button>
    <br />
    <br />
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

        {/* advance page */}
        
        <div className="mainAdv">
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setmvp(s => !s)}}onClick= {()=>{setmvp(s => !s)}} />
            <p>MVP</p>
          <div className="card" style={ {display:mvp? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
           <section onChange={eventHandle3}>
                  <input type="radio" value="minimum" name="mvp"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="mvp" value="range" /> <label>range</label>
               </section>
               
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setA_kill(s => !s)}}/>
            <p>Top_Assaulter(kills)</p>
            <div className="card" style={ {display:A_kill? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_assaulter_kill" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_assaulter_kill" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setA_damage(s => !s)}}/>
            <p>Top Assaulter (Damage)</p>
            <div className="card" style={ {display:A_damage? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_assaulter_damage"  value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_assaulter_damage" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setReviver(s => !s)}}/>
            <p>Top Reviver</p>
            <div className="card" style={ {display:Reviver? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_reviver" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_reviver" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setgreanadier(s => !s)}}/>
            <p>Top Greanadier</p>
            <div className="card" style={ {display:greanadier? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_greanadier" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_greanadier" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setclutcher(s => !s)}}/>
            <p>Top Clutcher</p>
            <div className="card" style={ {display:clutcher? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_clutcher" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_clutcher" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setsniper(s => !s)}}/>
            <p>Top Sniper</p>
            <div className="card" style={ {display:sniper? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
           <div className="condition">
             {/* radio btn section*/}
               <section onChange={eventHandle3}>
                  <input type="radio" name="top_sniper" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio" name="top_sniper" value="range" /> <label>range</label>
               </section>
           </div>
          </div>
            </div>
        </div>
        <br />
        
        
        
        </>
    )
}


export default Advance