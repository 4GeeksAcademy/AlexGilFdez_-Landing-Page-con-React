import React from "react";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Card from "../Card";
import Footer from "../Footer";
//include images into your bundle


//create your first component
const Home = () => {
	let data = [
		{
			title: "4Geeks",
			description: "La academia",
			buttonLabel: "boton pincha aqui!",
			buttonURL: "https://es.wikipedia.org/wiki/Wikipedia:Portada"
		},
		{
			title: "miau",
			description: "gato",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Salma_Hayek"
		},
		{
			title: "miau",
			description: "gato",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Salma_Hayek"
		},
		{
			title: "miau",
			description: "gato",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Salma_Hayek"
		},
	]
	return (
		<div className="text-center">
		<Navbar/>
		<Jumbotron/>
		<div className="container d-flex ">
		
		{data.map ((value, index, array)=>{
			return <Card key={index} title= {value.title} description= {value.description} buttonLabel={value.buttonLabel} buttonURL= {value.buttonURL}/>
		})}
		
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
