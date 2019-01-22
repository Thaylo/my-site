import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'

const jobs = [
  {
    company: 'Conexos',
    begin: {
      month: 'aug',
      year: '2018',
    },
    duration: '4 mos',
    occupation: 'Back-end Web Developer',
    description:
      'Software Engineering activities and technologies, including but not limited to JAVA, Spring Boot, and Oracle PL/SQL.',
  },
  {
    company: 'Lynx Process',
    begin: {
      month: 'nov',
      year: '2015',
    },
    duration: '1 yr 2 mos',
    occupation: 'Constrol Systems Software Engineer',
    description:
      'Development of stockpile management and robotic control systems using C#/ Unity3D and MATLAB, including automation of stockyard machine operations for Vale SafeArray.',
  },
  {
    company: 'APPI Tecnologia',
    begin: {
      month: 'set',
      year: '2014',
    },
    duration: '10 mos',
    occupation: 'Platform Developer',
    description: 'Development in C/C++ for embedded systems (POSes).',
  },

  {
    company: 'PadTec',
    begin: {
      month: 'apr',
      year: '2012',
    },
    duration: '1 yr 7 mos',
    occupation: 'Intern',
    description:
      'Development in C/C++ for optical transport networks emulators, following the ITU-T recommendations for OTN technology.',
  },
  /* ... */
]

const Timeline = ({ className }) => {
  return (
    <div className={className}>
      <h1>Experiences</h1>
      {jobs.map(job => (
        <article
          key={job.begin.month + job.begin.year}
          className="timeline__item"
        >
          <div className="inner">
            <span className="timeline__date">
              <span className="timeline__month">{job.begin.month}</span>
              <span className="timeline__year">{job.begin.year}</span>
            </span>
            <h2 className="timeline__title">
              {job.occupation} at {job.company} <br />
              <small className="timeline__title--small">
                ({job.duration || 'até o momento'})
              </small>
            </h2>
            <p>{job.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default styled(Timeline)`
  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -1px;
    width: 1px;
    height: calc(100% - 70px);
    background: #25303b;
  }
  .timeline__item {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }
  .timeline__item:after {
    content: '';
    display: block;
    clear: both;
  }
  .timeline__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
    border-radius: 6px;
    border: 1px solid #25303b;
  }
  .timeline__date {
    display: block;
    width: 60px;
    padding: 10px 5px;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -30px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: #25303b;
    color: #fff;
    box-shadow: 0 0 0 7px #fff;
  }
  .timeline__date span {
    display: block;
    text-align: center;
  }
  .timeline__month {
    font-size: 18px;
    padding-top: 4px;
  }
  .timeline__year {
    font-size: 10px;
  }
  .timeline__title {
    padding: 15px;
    margin: 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 3px 3px 0 0;
    position: relative;
  }
  .timeline__title:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 30%;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
  }
  .timeline__item div.inner p {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    background: #fff;
    color: #656565;
    border-radius: 0 0 6px 6px;
  }
  .timeline__item:nth-child(2n + 2) div.inner {
    float: right;
  }
  .timeline__title {
    background: #25303b;
  }
  .timeline__title:after {
    background: #25303b;
  }

  .timeline__title--small {
    font-size: 10px;
  }

  ${p => config().media['sm']`
  .timeline__item div.inner {
    width: 40%;
    margin: 5px 0 0 0;
  }

  .timeline__item div.inner h2:after {
    top: 20px;
    left: unset;
    right: -5px;
  }
  .timeline__item:nth-child(2n+2) div.inner h2:after {
    left: -5px;
  }

  `}
`
