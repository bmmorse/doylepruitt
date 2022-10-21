import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BUTTON, DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const DIV_FULL = styled(full)`
  align-items: center;
  background: white;
  /* background: url('https://doylepruitt.s3.us-east-2.amazonaws.com/lake-optimized.jpg'); */
  background-size: cover;
  background-color: #072a43;
  background-position: bottom;
  height: 100vh;
`;

const DIV_TEXT = styled.div`
  align-items: center;
  color: var(--white90);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  &.fade {
    p {
      transition: opacity 1000ms ease-out 300ms, bottom 1000ms ease-out 300ms;
      opacity: 1;
      bottom: 0px;
    }
    h1 {
      transition: opacity 1000ms ease-out 400ms, bottom 1000ms ease-out 400ms;
      opacity: 1;
      bottom: 0px;
    }
    a {
      transition: opacity 1000ms ease-out 500ms, bottom 1000ms ease-out 500ms;
      opacity: 1;
      bottom: 0px;
    }
  }

  p {
    color: white;
    font-size: 16px;
    line-height: 24px;
    position: relative;
    opacity: 0;
    bottom: -50px;
  }

  h1 {
    color: inherit;
    font-size: 36px;
    line-height: 48px;
    margin: 40px 0;
    opacity: 0;
    bottom: -50px;
    position: relative;
  }

  a {
    opacity: 0;
    bottom: -50px;
    position: relative;
  }
`;

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0,
    root: null,
  });

  return (
    <DIV_FULL>
      <DIV_TEXT ref={ref} className={inView ? 'fade' : ''}>
        <p>Psychotherapy in the Finger Lakes</p>
        <h1>Hope. Growth. Resilience.</h1>
        <Link to='/contact' className='linkButton'>
          Contact Me
        </Link>
      </DIV_TEXT>
    </DIV_FULL>
  );
}

// componentDidMount() {
//   const img = new Image();
//   img.src = 'https://doylepruitt.s3.us-east-2.amazonaws.com/homeImage.jpg';
//   img.onload = () => {
//     document.fonts.ready.then(() => {
//       this.setState({ background_is_loaded: true });
//     });
//   };
// }

// const Image = (props) => {
//   const { ref, inView } = useInView({
//     threshold: 0.4,
//     triggerOnce: true,
//   });
//   return (
//     <ImageDiv>
//       <img
//         ref={ref}
//         className={inView ? 'imagesAnimation' : ''}
//         src={props.src}
//         alt=''
//       />
//     </ImageDiv>
//   );
// };
