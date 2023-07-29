import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import tailwindIcon from '../assets/tailwindIcon.png';
import expressJsLogo from '../assets/expressJsLogo.png';
import reduxLogo from '../assets/reduxLogo.png';
import postgreSqlLogo from '../assets/postgreSqlLogo.png';
import mongoDbLogo from '../assets/mongoDbLogo.png';

export default[
  {
    icon: <FontAwesomeIcon icon={faReact} className="w-full h-full" />,
     title: 'React',
  },
   {
    icon: <img src={reduxLogo} alt="reduxLogo" className="w-full h-full" />,
     title: 'Redux',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} className="w-full h-full"  />,
    title: 'Node JS',
  },
   {
    icon: <img src={expressJsLogo} alt="expressJs" className="w-full h-full" />
,
     title: 'express-JS',
  }, 
  {
    icon: <FontAwesomeIcon icon={faJs} className="w-full h-full"  />,
    title: 'JavaScript',
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} className="w-full h-full" />,
     title: 'HTML5',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className="w-full h-full" />,
     title: 'CSS3',
  },
  {
    icon: <img src={tailwindIcon} alt="TailwindCss" className="w-full h-full" />
,
     title: 'Tailwind-CSS',
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} className="w-full h-full"  />,
    title: 'Git',
  },
  {
    icon: <img src={postgreSqlLogo} alt="postgreSql" className="w-full h-full"  />,
    title: 'postgreSQL',
  },
   {
    icon: <img src={mongoDbLogo} alt="mongoDb" className="w-full h-full"  />,
    title: 'MongoDB',
  },   
];

 