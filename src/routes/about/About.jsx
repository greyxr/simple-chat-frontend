import React, { useEffect } from 'react';
import './about.css';
import { animateText } from '../../components/animateText.js'

const About = () => {
  const sentence = `This is an about page with animated text.`;

const handleLoadAbout = (event) => {
  animateText(sentence, 'outputDiv');
};

useEffect(() => {
  handleLoadAbout()
}, [])

  return (

    <main>
      <div id="wordContainer">
        <div id="outputDiv"></div>
        <img style={{ height: '3.5em', marginTop: '20%' }} src="./xorm1.png" alt="" />
      </div>
    </main>
  );
}

export default About