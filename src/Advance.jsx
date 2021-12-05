import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import {Row, Col} from 'react-grid-system';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl"; 
import Select from "@material-ui/core/Select";


import { makeStyles } from'@material-ui/core/styles';

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
    const options = [
      { label: "Option 1", value: "CL" },
      { label: "Option 2", value: "AR" },
      { label: "Option 3", value: "MX" },
      { label: "Option 4", value: "Ty" }
    ];

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
  const[value,setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value)
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
          
          
         <Card >
         <CardContent style={{backgroundColor: "#deebff"}}>

            <Row>
              <Col> < input type="CheckBox" class="double"   onClick= {()=>{setmvp(s => !s)}}onClick= {()=>{setmvp(s => !s)}} /></Col>
              <Col><p>MVP</p></Col>
              <Col><input type="text" style={ {display:mvp? "block ":"none" }} placeholder="Numder of Prizes" /></Col>
              <Col> <input type="text" style={ {display:mvp? "block ":"none" }} placeholder="prize amount" /> </Col>
                {/* radio btn section*/}
              <Col><input type="radio"  onChange={eventHandle3} style={ {display:mvp? "block ":"none" }} value="minimum"  name="mvp"/><label style={ {display:mvp? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input type="radio" onChange={eventHandle3} style={ {display:mvp? "block ":"none" }} name="mvp" value="range"  /> <label style={ {display:mvp? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:mvp? "block ":"none" }} Value="tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
          
      
            <Row>
              <Col><input type="CheckBox" class="double"   onClick= {()=>{setA_kill(s => !s)}}/></Col>
              <Col><p>Top_Assaulter(kills)</p></Col>
              <Col><input type="text" style={ {display:A_kill? "block ":"none" }} placeholder="Numder of Prizes" /></Col>
              <Col><input type="text" style={ {display:A_kill? "block ":"none" }} placeholder="prize amount" /></Col>
                {/* radio btn section*/}
              <Col><input onChange={eventHandle3} type="radio" style={ {display:A_kill? "block ":"none" }} name="top_assaulter_kill" value="minimum"/> <label style={ {display:A_kill? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input onChange={eventHandle3} type="radio" style={ {display:A_kill? "block ":"none" }} name="top_assaulter_kill" value="range" /> <label style={ {display:A_kill? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:A_kill? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
           


           
            <Row>
              <Col>< input type="CheckBox" class="double"   onClick= {()=>{setA_damage(s => !s)}}/></Col>
              <Col><p>Top_Assaulter(Damage)</p></Col>
              <Col><input type="text" style={ {display:A_damage? "block ":"none" }} placeholder="Numder of Prizes" /></Col> 
              <Col><input type="text" style={ {display:A_damage? "block ":"none" }} placeholder="prize amount" /></Col>
                {/* radio btn section*/}
              <Col><input onChange={eventHandle3} type="radio" style={ {display:A_damage? "block ":"none" }} name="top_assaulter_damage"  value="minimum"/> <label style={ {display:A_damage? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input onChange={eventHandle3} type="radio" style={ {display:A_damage? "block ":"none" }} name="top_assaulter_damage" value="range" /> <label style={ {display:A_damage? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:A_damage? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
        

            <Row>
              <Col>< input type="CheckBox" class="double"   onClick= {()=>{setReviver(s => !s)}}/></Col>
              <Col><p>Top_Reviver</p>   </Col>
              <Col><input type="text" style={ {display:Reviver? "block ":"none" }} placeholder="Numder of Prizes" /></Col>
              <Col><input type="text" style={ {display:Reviver? "block ":"none" }} placeholder="prize amount" /></Col>
                {/* radio btn section*/}
              <Col><input onChange={eventHandle3} type="radio" style={ {display:Reviver? "block ":"none" }} name="top_reviver" value="minimum"/> <label style={ {display:Reviver? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input onChange={eventHandle3} type="radio" style={ {display:Reviver? "block ":"none" }} name="top_reviver" value="range" /> <label style={ {display:Reviver? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:Reviver? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
          

            <Row>
              <Col>< input type="CheckBox" class="double"   onClick= {()=>{setgreanadier(s => !s)}}/></Col>
              <Col><p>Top_Greanadier</p></Col>
              <Col><input type="text" style={ {display:greanadier? "block ":"none" }} placeholder="Numder of Prizes" /></Col>
              <Col><input type="text" style={ {display:greanadier? "block ":"none" }} placeholder="prize amount" /></Col>
                {/* radio btn section*/}
              <Col><input onChange={eventHandle3} type="radio" style={ {display:greanadier? "block ":"none" }} name="top_greanadier" value="minimum"/> <label style={ {display:greanadier? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input onChange={eventHandle3} type="radio" style={ {display:greanadier? "block ":"none" }} name="top_greanadier" value="range" /> <label style={ {display:greanadier? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:greanadier? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
      

            <Row>
              <Col>< input type="CheckBox" class="double"  onClick= {()=>{setclutcher(s => !s)}}/></Col>
              <Col><p>Top_Clutcher</p></Col>
              <Col><input type="text" style={ {display:clutcher? "block ":"none" }} placeholder="Numder of Prizes" /></Col>
              <Col><input type="text" style={ {display:clutcher? "block ":"none" }} placeholder="prize amount" /></Col>
                {/* radio btn section*/}
              <Col> <input onChange={eventHandle3} style={ {display:clutcher? "block ":"none" }} type="radio" name="top_clutcher" value="minimum"/> <label style={ {display:clutcher? "block ":"none" }} htmlFor=""> Minimum</label></Col>
              <Col><input onChange={eventHandle3} style={ {display:clutcher? "block ":"none" }} type="radio" name="top_clutcher" value="range" /> <label style={ {display:clutcher? "block ":"none" }}>range</label></Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:clutcher? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
            
            <Row>
              <Col>< input type="CheckBox" class="double"   onClick= {()=>{setsniper(s => !s)}}/> </Col>
              <Col><p>Top_Sniper</p> </Col>
              <Col><input type="text" style={ {display:sniper? "block ":"none" }} placeholder="Numder of Prizes" /> </Col>
              <Col><input type="text" style={ {display:sniper? "block ":"none" }} placeholder="prize amount" /> </Col>
                 {/* radio btn section*/}
              <Col><input type="radio" style={ {display:sniper? "block ":"none" }} name="top_sniper" value="minimum"/> <label style={ {display:sniper? "block ":"none" }} htmlFor=""> Minimum</label> </Col>
              <Col><input type="radio" style={ {display:sniper? "block ":"none" }} name="top_sniper" value="range" /> <label style={ {display:sniper? "block ":"none" }}>range</label> </Col>
              <Col>
              <FormControl>
                <Select labelId='select-demo' id='select' value={value} style={ {display:sniper? "block ":"none" }} label="Tiebreaker" onchange={handleChange}>
                  <MenuItem value={'Condition 1'}>Condition 1</MenuItem>
                  <MenuItem value={'Condition 2'}>Condition 2</MenuItem>
                  <MenuItem value={'Condition 3'}>Condition 3</MenuItem>
                  <MenuItem value={'Condition 4'}>Condition 4</MenuItem>

                </Select>
              </FormControl>
              </Col>
            </Row>
            </CardContent >
        </Card>

        </div>
        <br />
        
        
        
        </>
    )
}
export default Advance
