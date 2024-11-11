import React from 'react'

const Card = (props) => {
    let styleCard = {width: "18rem"};
  return (
    <div className="card h-100" style={styleCard}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-primary" href={props.buttonURL}>
                    Find out More!
                </button>
  </div>
</div>
  )
}

export default Card