import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import CounterClockwise from './CounterClockwise';
import { Image, Row, Col, Button}  from 'react-bootstrap'

import CircleProgressBarBase from './CircleProgressBarBase';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

const buttonStyle = {
  width: 400,
  height: 400,
  backgroundColor: "red"
};

function ModalExample ({modalIsOpen, setModalIsOpen, random}){
  return(
        <Modal isOpen={modalIsOpen}  
                style={{Right: 80, Left: 80}}
                 >
          <h1 style={{textAlign: 'center', }}>Calories</h1>
          <div style={{width: 300, height: 'auto', padding: 'inherit', marginLeft: 433}}>
            {/* <CounterClockwise progress={random} /> */}
            {/* <CircleProgressBarBase  percentage={random} /> */}
            <CircleProgressBarBase
              trailStrokeColor="#f66f14"
              strokeColor="#eea320"
              percentage={parseInt(random)}
              innerText="Healthy"
              strokeDasharray={`${random} ${100 - random}`}
              
            />
          </div>
          {/* <div> */}
             <Button  className="view-recipe" onClick={ () => setModalIsOpen(!modalIsOpen)}>Close</Button>
          {/* </div> */}
        </Modal>
  )
}

export default ModalExample;