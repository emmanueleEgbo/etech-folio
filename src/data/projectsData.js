
import React from "react";
import faceDetection from "../assets/faceDetection.png";
import portfolioImg from "../assets/etech-folioPics.png";
import robofriendsImg from "../assets/robofriends-screenshot.png";
import calculatorImg from "../assets/simplePocketCalculator.png";
import shoppingListImg from "../assets/shopping-list.png";


export default [
    {
      title: 'smart-brain - A Face Detection App',
      imageUrl: faceDetection,
      tech: ['Tech:', 'React', 'JavaScript', 'HTML', 'CSS', 'Tachyons CSS', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'Clarifai API'],
      demoUrl:'https://smart-brain-3eok.onrender.com/'

    },{
      title: 'My portfolio website',
      imageUrl: portfolioImg,
      tech: ['Tech:', 'React', 'JavaScript', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Daisy UI'],
      demoUrl: 'https://etechpro.org'
    },
    {
      title: 'robofriends - An App that lets you select your favorite robofriend',
      imageUrl: robofriendsImg,
      tech: ['Tech:', 'React', 'JavaScript', 'HTML', 'CSS'],
      demoUrl: 'https://etechpro-robofriends.netlify.app'
    },
    {
      title: 'shopping-list',
      imageUrl: shoppingListImg,
      tech: ['Tech:', 'JavaScript', 'HTML', 'CSS'],
      demoUrl: 'https://etechpro.github.io'
    },
    {
      title: 'simple pocket calculator',
      imageUrl: calculatorImg,
      tech: ['Tech:', 'JavaScript', 'HTML', 'CSS'],
      demoUrl: 'https://etechpro.github.io/etechpro.github.io-calculator/'
    },  
];
