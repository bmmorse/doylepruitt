import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_GRID = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  background: var(--white);
  margin: 0;
  align-items: center;
  padding: 80px max(calc((100vw - 480px) / 2), 24px);

  &.office {
    .image {
      background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg');
    }
  }
  &.doyle {
    .image {
      background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/doyle.jpg');
    }
  }

  .image {
    grid-area: 1 / 1 / 3 / 6;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    aspect-ratio: 4/3;
    z-index: 2;
    opacity: 0;
    position: relative;
    top: 100px;
    transition: opacity 800ms ease-out, top 800ms ease-out;
  }

  .color {
    position: relative;
    grid-area: 2 / 1 / 4 / -1;
    background: linear-gradient(
      180deg,
      rgba(252, 205, 180, 0.5) 0%,
      rgba(224, 153, 156, 0.5) 100%
    );
    height: 100%;
    margin: 0 min(calc(-1 * (100vw - 480px) / 2), -24px);
    opacity: 0;
    bottom: 100px;
    transition: opacity 800ms ease-out 200ms, bottom 800ms ease-out 200ms;
  }

  .content {
    width: 100%;
    grid-area: 3 / 1 / span 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 40px 0 80px 0;

    h2 {
      position: relative;
      top: 40px;
      opacity: 0;
      transition: opacity 800ms ease-out 400ms, top 800ms ease-out 400ms;
    }

    p {
      position: relative;
      margin: 24px 0 32px 0;
      max-width: 510px;
      opacity: 0;
      top: 40px;
      transition: opacity 800ms ease 600ms, top 800ms ease-out 600ms;
    }

    a {
      position: relative;
      top: 40px;
      opacity: 0;
      color: var(--text);
      border-color: var(--text);
      transition: opacity 800ms ease 800ms, top 800ms ease-out 800ms,
        color 400ms ease-out, border-color 400ms ease-out;

      &:hover {
        color: var(--sunset3);
        border-color: var(--sunset3);
      }
    }
  }

  @media (min-width: 840px) {
    grid-template-columns: repeat(12, 1fr);
    gap: 0px;

    &.office {
      padding: 160px max(calc((100vw - 1368px) / 2), 80px) 80px
        max(calc((100vw - 1368px) / 2), 80px);
    }
    &.doyle {
      padding: 80px max(calc((100vw - 1368px) / 2), 80px) 160px
        max(calc((100vw - 1368px) / 2), 80px);
    }
    .image {
      grid-area: 1 / 1 / 2 / 6;
      grid-area: ${(props) =>
        props.alignImage === 'left' ? '1 / 1 / 2 / 6' : '1 / 8 / 2 / -1'};
      margin: 80px 0;
    }

    .color {
      grid-area: 1 / 4 / -1 / -1;
      grid-area: ${(props) =>
        props.alignImage === 'left' ? '1 / 4 / -1 / -1' : '1 / 1 / 2 / -4'};
      margin: 0;
    }

    .content {
      grid-area: 1 / 6 / -1 / -1;
      grid-area: ${(props) =>
        props.alignImage === 'left' ? '1 / 7 / -1 / -2' : '1 / 2 / 2 / 7'};
      margin: 80px 0;
      /* padding: 0 8%; */
    }
  }

  &.fade {
    .image {
      opacity: 1;
      top: 0px;
    }
    .color {
      opacity: 1;
      bottom: 0px;
    }

    .content {
      h2 {
        opacity: 1;
        top: 0px;
      }
      p {
        opacity: 1;
        top: 0px;
      }
      a {
        opacity: 1;
        top: 0px;
      }
    }
  }
`;

export default function Card(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
    rootMargin: '0% 0% 8% 0%',
  });

  const myServices = (
    <DIV_GRID ref={ref} className={inView ? 'office fade' : 'office'}>
      <div className='image'></div>
      <div className='color'></div>
      <div className='content'>
        <h2>My Services</h2>
        <p>
          I have extensive experience working with individuals and families
          coping with trauma, adversity, disturbance, and the stressors of daily
          life.
        </p>
        <Link to='/services' className='linkButton'>
          Learn More
        </Link>
      </div>
    </DIV_GRID>
  );

  const aboutMe = (
    <DIV_GRID ref={ref} className={inView ? 'doyle fade' : 'doyle'}>
      <div className='image'></div>
      <div className='color'></div>
      <div className='content'>
        <h2>About Me</h2>
        <p>
          My goal with the client is to first establish safety and
          stabilization. Once this is achieved we can move towards exploring and
          understanding their trauma.
        </p>
        <Link to='/bio' className='linkButton'>
          Learn More
        </Link>
      </div>
    </DIV_GRID>
  );

  return props.content === 'myServices' ? myServices : aboutMe;
}