import React from 'react';
import { ReactSVG } from 'react-svg';
import './Main.scss';

import linkedinLogo from './../../assets/LinkedIn_Logo.svg'

const Main = () => {
  return (
      <main>
        <div>
        {/* TODO: Import svg inside the project */}
        <span class="material-symbols-outlined">sync</span>
        </div>
        <p>
          <span>
            The page is under maintenance.
            <br />
            You can find me at
            <a className='linkedin-link' href="https://www.linkedin.com/in/fazioandrea-f/"target="_blank" rel="noreferrer">
              <ReactSVG src={linkedinLogo} title="Linkedin logo" desc="Linkedin logo" className="wrapper-linkedin-logo" />
            </a>
            .
          </span>
        </p>
      </main>
  );
}

export default Main;
