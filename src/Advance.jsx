import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import {Row, Col } from 'react-grid-system';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const Advance = () => {
    // for card
    const[ mvp  , setmvp ] = useState(false)
    const[ A_damage , setA_damage] = useState(false)
    const [A_kill , setA_kill] = useState(false)
    const [ Reviver , setReviver] = useState(false)
    const [greanadier , setgreanadier] = useState(false)
    const [clutcher  , setclutcher] = useState(false)
    const [sniper  , setsniper] = useState(false)
    
    const[ showrank , setshowrank ]=useState(false)
    const [showrange  , setshowrange] = useState(false)
  
    
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
        
    const eventHandle3 = (e)=>{
      const value = e.target.value;
      const name = e.target.name;

      setadvdata({...rangeFields,[name]:value})  
  }

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), rank: '', prize: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  rank: '', prize: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  
/*Range*/

  const [rangeFields , setRangefields ]=useState([{
    id: uuidv4(),
    rangeto:"",
    rangefrom:"",
    prize:""

}])

const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("RangeFields", rangeFields);
  };
  
  const handlerChangeInput = (id, event) => {
    const newRangeFields = rangeFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setRangefields(newRangeFields);
}
const handlerAddFields = () => {
    setRangefields([...rangeFields, { id: uuidv4(),  rangeto: '', rangefrom: '', prize:'' }])
  }
  const handlerRemoveFields = id => {
    const values  = [...rangeFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setRangefields(values);
  }

   




     

                  

    return (
        <>
         <section onChange={(e) => { setmode(e.target.value) } }>
                <h4> Mode </h4>
                <input type="radio" value="Squad" name="mode" /> Squad
                <input type="radio" value="Duo" name="mode" /> Duo
                <input type="radio" value="solo" name="mode" /> solo
                <br />
            </section><br /><label htmlFor=""> Add Rank & Prize Amount </label><br /><button className="Add_Rank" onClick={() => { setshowrank(s => !s) }}> Add Rank </button><button className="Add_Range" onClick={() => { setshowrange(s => !s) }}> Add Range </button><br /><br />
      {/* rank ka section */}
        <div style={{display: showrank ? 'block' :"none"}} >
        <Container>
      <form onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField name="rank"label="Rank"variant="filled"value={inputField.rank}onChange={event => handleChangeInput(inputField.id, event)}/>
            &nbsp;&nbsp;
            <TextField name="prize"label="Prize"variant="filled"value={inputField.prize}onChange={event => handleChangeInput(inputField.id, event)}/>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
          </div>
        )) }
        <Button variant="contained" color="primary" type="submit" endIcon={<Icon></Icon>}onClick={handleSubmit}>Submit</Button>
      </form>
    </Container>
            </div>

            {/* *************************range ka secrtion***************************** */}
            
            <div style={ {display: showrange ? "block ":"none" }}>
            <Container>
      <form onSubmit={handlerSubmit}>
        { rangeFields.map(rangeField => (
          <div key={rangeField.id}>
            <TextField name="rangeto"label="Rangeto"variant="filled"value={rangeField.rangeto} onChange={event => handlerChangeInput(rangeField.id, event)}/>
            &nbsp;&nbsp;
            <TextField name="rangefrom"label="Rangefrom"variant="filled"value={rangeField.rangefrom}onChange={event => handlerChangeInput(rangeField.id, event)}/>
             <TextField name="prize"label="Prize"variant="filled"value={rangeField.prize}onChange={event => handlerChangeInput(rangeField.id, event)}/>
             <IconButton
              onClick={handlerAddFields}
            >
              <AddIcon />
            </IconButton>
            <IconButton disabled={rangeFields.length === 1} onClick={() => handlerRemoveFields(rangeField.id)}>
              <RemoveIcon />
            </IconButton>
          </div>
        )) }
        <Button variant="contained"  color="primary"  type="submit" endIcon={<Icon></Icon>} >Submit</Button>
      </form>
    </Container>
     </div>
             {/* map method in rank */}
        {/*
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
          */}

    
  


       
        {/*
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
      */}

        {/* advance page */}
        
        <div className="mainAdv">
         <Row>
            <Col sm={3} md={6} lg={9}>
           < input type="CheckBox"   onClick= {()=>{setmvp(s => !s)}}onClick= {()=>{setmvp(s => !s)}} />
           </Col>
           <Col sm={3} md={6} lg={9}>
            <p >MVP</p>
            </Col>
            <Col sm={4}>
            
          <div  style={ {display:mvp? "block ":"none" }}>
          <Row>
          <Col sm={4}>
          <input type="text" placeholder="Numder of Prizes" />
          </Col>
          <Col sm={4}>
          <input type="text" placeholder="prize amount" />
          </Col>
           
             {/* radio btn section*/}
           <Col sm={9}>
                  <input type="radio" value="minimum" onChange={eventHandle3} name="mvp"/> <label htmlFor=""> Minimum</label>
                  </Col>
                  <Col sm={9}>
                  <input type="radio" name="mvp" onChange={eventHandle3} value="range" /> <label>range</label>
               
              </Col>
               
        
              </Row>
            </div>
           
            </Col>
            </Row>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setA_kill(s => !s)}}/>
            <p>Top_Assaulter(kills)</p>
            <div  style={ {display:A_kill? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
          
             {/* radio btn section*/}
               
                  <input type="radio"  onChange={eventHandle3} name="top_assaulter_kill" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_assaulter_kill" value="range" /> <label>range</label>
              
           
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setA_damage(s => !s)}}/>
            <p>Top Assaulter (Damage)</p>
            <div  style={ {display:A_damage? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
        
             {/* radio btn section*/}
               
                  <input type="radio"  onChange={eventHandle3} name="top_assaulter_damage"  value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_assaulter_damage" value="range" /> <label>range</label>
               
          
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setReviver(s => !s)}}/>
            <p>Top Reviver</p>
            <div  style={ {display:Reviver? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
       
             {/* radio btn section*/}
              
                  <input type="radio"  onChange={eventHandle3} name="top_reviver" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_reviver" value="range" /> <label>range</label>
               
          
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setgreanadier(s => !s)}}/>
            <p>Top Greanadier</p>
            <div  style={ {display:greanadier? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
        
             {/* radio btn section*/}
               
                  <input type="radio"  onChange={eventHandle3} name="top_greanadier" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_greanadier" value="range" /> <label>range</label>
               
       
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setclutcher(s => !s)}}/>
            <p>Top Clutcher</p>
            <div  style={ {display:clutcher? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
       
             {/* radio btn section*/}
               
                  <input type="radio"  onChange={eventHandle3} name="top_clutcher" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_clutcher" value="range" /> <label>range</label>
               
        
          </div>
            </div>
            <div className="mvp">
           < input type="CheckBox"   onClick= {()=>{setsniper(s => !s)}}/>
            <p>Top Sniper</p>
            <div  style={ {display:sniper? "block ":"none" }}>
          <input type="text" placeholder="Numder of Prizes" />
            <input type="text" placeholder="prize amount" />
         
             {/* radio btn section*/}
                  <input type="radio"  onChange={eventHandle3} name="top_sniper" value="minimum"/> <label htmlFor=""> Minimum</label>
            <input type="radio"  onChange={eventHandle3} name="top_sniper" value="range" /> <label>range</label>
     
          </div>
            </div>
            
        </div>
        <br />
        
        
        
        </>
    )
}


export default Advance
