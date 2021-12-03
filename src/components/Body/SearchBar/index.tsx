import React, { useState } from 'react';
import './style.css';
import WhiteEye from '../../assets/images/eye-white.png';

const defaultFormData ={
    pseudonyme:""
    
  }

// Stocker les infos
function SearchBar() {
    const [formData, setFormData] = useState(defaultFormData);
    const {pseudonyme}=formData;
  
    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData((prevState: any)=>({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    };
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(formData);
  
      setFormData(defaultFormData);
    }
    return (
        <div className="interface">
            <form onSubmit={onSubmit}>
            <input 
            type="text"
            id="pseudonyme"
            value={pseudonyme} onChange={onChange}
             placeholder="Psedonyme#EUW ..."
            className="searchUsername"/>
            <button className="buttonEntrer" type="submit">
                <div className="whiteEye">
                    <img src={WhiteEye} 
                        alt="WhiteEye"
                        className = "searchImg"/> 
                </div>
                <span>Entrer</span>
            </button>
            </form>
            <div className="lineSeperation"></div>
        </div>
    )
}


export default SearchBar;