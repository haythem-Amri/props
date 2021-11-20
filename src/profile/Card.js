import React from "react";
const handleName = (profileName) => {  
  alert(`Profile belgons to ${profileName}`)
};

const Card = (props) => {
  const { fullName, bio ,profession ,imageUrl} = props.data;
  return (
    <div className="card"> 
          <img src={imageUrl} width="300px" alt="destination" />

     <p className="card-text" style={{ fontSize: 30 ,color:"#d83070" }}>{fullName}</p>
      <p className="card-text" style={{ fontSize: 30 ,color:"#d8309" }}>{bio}</p>
      <p className="card-text" style={{ fontSize: 30 ,color:"#d83070" }}>{profession}</p>


      <button onClick={() => handleName(fullName)} className="btn btn-primary">
       ALL PROFILE INFO
    </button>
    </div>
  );
};


export default Card;