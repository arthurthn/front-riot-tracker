import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router';
import WhiteEye from '../../assets/images/eye-white.png';
import {checkUserExist} from '../../../api/index'

// Stocker les infos
function SearchBar() {
    const [formData, setFormData] = useState('');

    const navigate = useNavigate()
  
    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData(e.target.value);
    };
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(formData);
      const res = await checkUserExist(formData)
      if(res.exist) navigate(`/statistiques/${formData}`)
      else console.log("error")
  
    }
    return (
        <div className="interface">
          <form onSubmit={onSubmit}>
            <input 
            type="text"
            id="pseudonyme"
            value={formData} onChange={onChange}
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