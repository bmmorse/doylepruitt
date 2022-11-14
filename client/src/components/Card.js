import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const DIV_GRID = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  background: var(--white);
  margin: 0;
  align-items: center;
  padding: 120px max(calc((100vw - 480px) / 2), 24px);

  &.office {
    background-color: #eff5fb;
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
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    aspect-ratio: 4/3;
    z-index: 2;
    opacity: 0;
    position: relative;
    top: 100px;
    transition: opacity 800ms ease-out, top 800ms ease-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 24px 0 0 0;
    order: 2;

    h3 {
      position: relative;
      top: 40px;
      opacity: 0;
      transition: opacity 800ms ease-out 400ms, top 800ms ease-out 400ms;
    }

    p {
      position: relative;
      margin: 16px 0 24px 0;
      opacity: 0;
      top: 40px;
      text-align: left;
      transition: opacity 800ms ease 700ms, top 800ms ease-out 700ms;
    }

    a {
      font-size: 14px;
      line-height: 16px;
      position: relative;
      top: 40px;
      opacity: 0;
      padding: 15px 23px;
      opacity: 0;
      top: 40px;
      position: relative;
      color: var(--text);
      border-color: var(--text);
      border: solid 1px var(--text);
      border-radius: 4px;
      transition: opacity 800ms ease-out 1000ms, top 800ms ease-out 1000ms,
        background 400ms ease-out, color 400ms ease-out;

      &:hover {
        background: var(--orange);
        border-color: var(--orange);
        color: var(--white);
      }
    }
  }

  @media (min-width: 840px) {
    flex-direction: row;
    gap: max(calc((100vw - 1368px) / 4), 40px);
    padding: 80px max(calc((100vw - 1368px) / 2), 40px) 80px
      max(calc((100vw - 1368px) / 2), 40px);

    .content {
      order: initial;
      width: 92%;
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
      h3 {
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
      <div className='content'>
        <h3>My Services</h3>
        <p>
          I have extensive experience working with individuals and families
          coping with trauma, adversity, disturbance, and the stressors of daily
          life.
        </p>
        <Link to='/services'>Learn More</Link>
      </div>
    </DIV_GRID>
  );

  const aboutMe = (
    <DIV_GRID ref={ref} className={inView ? 'doyle fade' : 'doyle'}>
      <div className='content'>
        <h3>About Me</h3>
        <p>
          My goal with the client is to first establish safety and
          stabilization. Once this is achieved we can move towards exploring and
          understanding their trauma.
        </p>
        <Link to='/bio'>Learn More</Link>
      </div>
      <div className='image'></div>
    </DIV_GRID>
  );

  return props.content === 'myServices' ? myServices : aboutMe;
}
