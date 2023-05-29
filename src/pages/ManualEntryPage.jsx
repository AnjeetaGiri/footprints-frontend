import React,{useState} from 'react';
import './ManualEntryPage.css';

function App() {
  const [formVal, setFormVal] = useState([{place:'', reason:''}])
  const addRow = () => {
    setFormVal([...formVal, {place:'', reason:''}])
  }
  const onRemove=(i) => {
    const newForm = [...formVal]
    newForm.splice(i, 1)
    setFormVal(newForm)
  }
  const onHandle = (e, i) => {
    let newForm = [...formVal]
    newForm[i][e.target.name]= e.target.value
    setFormVal(newForm)
  }
  const formValidation=(formVal)=>{
    const data = [...formVal]
    // var re = /\S+@\S+\.\S+/;
    let valid = true
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if(data[index].place === "") {
        data[index].placeCheck = "name required"
        data[index].placeLengthCheck = ""
        valid = false
      } else if(data[index].place.length < 3) {
        data[index].placeLengthCheck = "Place should be greater than 3"
        data[index].placeCheck = ""
        valid = false
      }
      else{
        data[index].placeCheck = ""
        data[index].placeLengthCheck = ""
        valid = true
      }

      if(data[index].reason === "") {
        data[index].reasonCheck = "name required"
        data[index].reasonLengthCheck = ""
        valid = false
      } else if(data[index].reason.length < 3) {
        data[index].reasonLengthCheck = "Place should be greater than 3"
        data[index].reasonCheck = ""
        valid = false
      }
      else{
        data[index].reasonCheck = ""
        data[index].reasonLengthCheck = ""
        valid = true
      }
      
      // if(data[index].reason === "") {
      //   data[index].reasonCheck = "name required"
      //   data[index].reasonLengthCheck = ""
      //   valid = false
      // } else if(data[index].reason.length < 3) {
      //   data[index].reasonLengthCheck = "Place should be greater than 3"
      //   data[index].reasonCheck = ""
      //   valid = false
      // }
      // else{
      //   data[index].reasonCheck = ""
      //   data[index].reasonLengthCheck = ""
      //   valid = true
      // }


      
      
    }
    setFormVal(data)
    return valid

  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitData", formVal)
   const errorRes = formValidation(formVal)
   console.log("errorRes", errorRes)
   if(errorRes) {
    // api call
   }
   else{
    // error msg
   }
  }
  return (
    <div className="ManualEntry-Container">
      <div style={{width:'60%', margin:'20px auto', }}>
        <form onSubmit={onSubmit}>
          {formVal.map((item, i)=> (
            <div>
              <div style={{padding:'10px', margin:'10px', diplay:'flex', flexDirection:'row'}}>
                <label>Place</label>
                <input type="text" name="place" value={item.place || ""} onChange={(e)=> onHandle(e, i)}/>
                <div style={{color:'red'}}>{item.placeCheck}<br/>{item.placeLengthCheck}</div>
              <label style={{marginTop:'50px'}}>Reason</label>
              <input type="text" name="reason" value={item.reason || ""} onChange={(e)=>onHandle(e, i)}/>
              <div  style={{color:'red'}}>{item.reasonCheck}<br/>{item.reasonFormat}</div>
              {
                i === 0 ? "" :  <button onClick={()=>onRemove(i)}>Remove</button>
              }
            </div>
             
            </div>

          ))}
          <div style={{marginTop:'20px'}}>
              <button onClick={addRow}>IN</button>
              {/* <button type="submit" style={{marginLeft:'20px'}}>Submit</button> */}
           </div>
        </form>
      </div>
    </div>
  );
}

export default App;