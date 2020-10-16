import React, { Component } from 'react';
import data from "./data1.json"; 

const socialMediaList = data.SocialMedias;

class Example extends Component {
	render() {
		return (
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default Example;