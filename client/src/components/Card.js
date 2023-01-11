import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Dots } from '../Globals/svg/dots.svg';

const DIV_GRID = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--white);
  padding: 0 max(calc((100vw - 576px) / 2), 32px);
  align-items: center;

  &.myServices {
    flex-direction: column-reverse;
    padding-bottom: 160px;
  }

  .imageWrapper {
    width: 100%;
    position: relative;

    .image {
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 4/5;
      opacity: 0;
      top: 100px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      /* border-radius: 16px; */
      z-index: 2;
      transition: opacity 500ms ease-out 200ms, top 500ms ease-out 200ms;

      &.doyle {
        background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/doyle2.jpg');
      }

      &.office {
        background-image: url('https://doylepruitt.s3.us-east-2.amazonaws.com/office.jpg');
      }
    }

    .dots {
      width: 56px;
      height: 316px;
      position: absolute;
      z-index: -1;
      top: calc(50% - (316px / 2));
      left: calc(-56px / 2);
      opacity: 0;
      fill: var(--orange);
      transition: opacity 500ms ease-out 800ms;

      &.blue {
        fill: var(--blue);
      }

      &.right {
        left: auto;
        right: calc(-56px / 2);
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      position: relative;
      top: 40px;
      opacity: 0;
      transition: opacity 500ms ease-out 350ms, top 500ms ease-out 350ms;
    }

    p {
      position: relative;
      margin: 16px 0 32px 0;
      opacity: 0;
      top: 40px;
      text-align: left;
      transition: opacity 500ms ease 500ms, top 500ms ease-out 500ms;
      color: var(--lightText);
    }

    a {
      position: relative;
      top: 40px;
      opacity: 0;

      color: var(--text);
      border: solid 1px var(--text);
      border-radius: 4px;
      transition: opacity 500ms ease-out 650ms, top 500ms ease-out 650ms,
        background 500ms ease-out, color 500ms ease-out;

      &:hover {
        background: var(--orange);
        border-color: var(--orange);
        color: var(--white);
      }
    }
  }

  @media (min-width: 600px) {
    .imageWrapper {
      .image {
        aspect-ratio: 1/1;
      }
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 64px;
    padding: 0 max(calc((100vw - 1280px) / 2), 40px);

    &.myServices {
      flex-direction: row;
      padding-bottom: 160px;
    }
  }

  &.fade {
    .imageWrapper {
      .image {
        opacity: 1;
        top: 0px;
      }
      .dots {
        opacity: 1;
      }
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
    threshold: 0.2,
    root: null,
    rootMargin: '0% 0% 0% 0%',
  });

  const myServices = (
    <DIV_GRID ref={ref} className={inView ? 'fade myServices' : 'myServices'}>
      <div className='content'>
        <h3>My Services</h3>
        <p>
          I have extensive experience working with individuals and families
          coping with trauma, adversity, disturbance, and the stressors of daily
          life.
        </p>
        <Link to='/services' className='linkButton'>
          Learn More
        </Link>
      </div>
      <div className='imageWrapper'>
        <div className='image office'></div>
        <Dots className='dots blue' />
      </div>
    </DIV_GRID>
  );

  const aboutMe = (
    <DIV_GRID ref={ref} className={inView ? 'fade aboutMe' : 'aboutMe'}>
      <div className='imageWrapper'>
        <div className='image doyle'></div>
        <Dots className='dots right' />
      </div>

      <div className='content'>
        <h3>About Me</h3>
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
