import React from 'react';
import {ReactSVG} from 'react-svg';
import './Main.scss';

import linkedinLogo from './../../assets/LinkedIn_Logo.svg';

const Main:() => React.JSX.Element = () => {
  return (
      <div>
        <div>
        {/* TODO: Import svg inside the project */}
        <span className="material-symbols-outlined">sync</span>
        </div>
        <p>
          <span>
            The page is under maintenance.
            <br />
            You can find me at{' '}
            <a className='linkedin-link' href="https://www.linkedin.com/in/fazioandrea-f/"target="_blank" rel="noreferrer">
              Linkedin
              {/* <ReactSVG src={linkedinLogo} title="Linkedin logo" desc="Linkedin logo" className="wrapper-linkedin-logo" /> */}
            </a>
            .
          </span>
        </p>
      </div>
  );
}

export default Main;
