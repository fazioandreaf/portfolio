import React from 'react';
import {ReactSVG} from 'react-svg';

import './Main.scss';

import meImg from "./../../assets/ln-account.png";
import HighlightedSpan from './../HighlightedSpan';

import Grid from './../Grid';
// import linkedinLogo from './../../assets/LinkedIn_Logo.svg';

const Main:() => React.JSX.Element = () => {
  let isLoaded = true;

  return (
      <Grid classNames='loaded-grid'>
        {isLoaded?<>
          <div>
            <p>
              <span>
                In addition to being a <HighlightedSpan color="green">
                  developer
                  </HighlightedSpan>
                  , I am also an engineer.
              </span>
              <span>
                Since high school there has been a strong passion for computer science and technology with a clear goal in mind: to maximize the potential of the tools at hand and improve processes.
              </span>
            </p>
          </div>
          <div className='profile-wrapper'>
            <img src={meImg} alt="me" />
          </div>
          </>:
        <>
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
        </>
        }
      </Grid>
  );
}

export default Main;
