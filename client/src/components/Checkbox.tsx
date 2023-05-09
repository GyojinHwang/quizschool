import React, {useState} from 'react'; 

function Checkbox(props: { togglePreference: any; sorts: any; }) { 
  
  const [checked, setChecked] = useState(false); 
  const togglePreference = props.togglePreference; 
  const sorts = props.sorts; 
  
  const handleChange = () => { 
    
    setChecked(!checked); togglePreference(sorts); 
    
  }; 
  
  return ( 
    
    <div>
    
      
      
      <p>
        {checked ? 'on' : 'off'}
      </p> 
      
    </div>
      
  ); 

}; 


export {Checkbox};