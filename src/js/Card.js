import React from 'react';


const Card = (props) => {
  let styleCard = { maxWidth: "100%", margin: "10px" };
  return (
    <div className="card h-100 text-center " style={styleCard}>
      <img className="card-img-top" src={props.photo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray', margin: '0 -15px', marginBottom: '20px' }} />
        <a className="btn btn-primary" href={props.buttonURL} >
  Find out More!
</a>
      </div>
    </div>
  )
}

export default Card