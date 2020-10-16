import React , {Component, useState, useEffect} from 'react';
import { Image, Row, Col, Button}  from 'react-bootstrap'
import { Star, StarFill, Clock, People, Award, Check} from 'react-bootstrap-icons';

import { IsEmpty, Map,  } from "react-lodash";

import CounterClockwise from './CounterClockwise';

import ModalExample from './ModalExample';

let _ = require('lodash');



const getRandomArbitrary = (min, max) => {
    let randomNumber = parseInt((Math.random() * (max - min) + min).toString());
    return randomNumber;
}   

const generateRand = () => {
    const min = 1;
    const max = 100;
    return min + Math.random() * (max - min);
}
const Recipe = ({title, calories, image, ingredients}) => {


    const [open, setOpen] = useState(false);

    
    let n = getRandomArbitrary(0, 5);
    let rand = generateRand();


    return(
    // <div>
    <Col xs={3} md={4} className="colSingleRecipe" >
        <div className="recipeBadge">
            <Image src={image} alt={image} />
            <Button className="background-icon" >
                <Check color="#FFF" size="25" />
            </Button>
            <div className="info">
            <div className="stars">
                {   
                    // (n > 0)?(
                    _.times(n, () => (
                        <StarFill color="#d4ab33" size={17}/>
                    ))
                    // ):
                }
                {
                     _.times(5-n, () => (
                        <Star color="#d4ab33" size={17} />
                    ))
                }
            </div>
            
            <h4 className={"title"}>{title}</h4>
            <Row className="">
                <Col>
                    <Clock color="#615959" size={12} /> <p className="stats-text"> {n}{n} Mins</p>
                    
                </Col>
                <Col>
                    <People color="#615959" size={12} /> <p className="stats-text"> {n} People</p>
                    
                </Col>
                <Col>
                    <Award color="#615959" size={12} /> <p className="stats-text"> Beginner</p>
                </Col>
            </Row>
        
            {/* <p>{calories}</p> */}
            
            </div>
            <Button className="view-recipe" onClick={() => setOpen(true)} >
                VIEW RECIPE 
            </Button>
            
            <div style={{}}>
                <ModalExample key={n} random={rand} modalIsOpen={open} setModalIsOpen={() => setOpen(!open)} />
            </div>
        </div>
        
         
        {/* <ol>
            {ingredients.map((ingredient,i) => (
                <li key={i} >{ingredient.text}</li>
            ))}
        </ol> */}
        
    </Col>
    
    // </div>
    )
}

export default Recipe;