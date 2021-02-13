import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';

const DIV_FULL = styled.div`
  background: #002842;
  overflow: hidden;
  padding: 10rem 5% 5rem 5%;
  position: relative;
  width: 100%;

  h2 {
    color: #eefdff;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    padding: 0 0 5rem 5%;
    width: auto;
  }
`;

const DIV_WINDOW = styled.div`
  overflow: hidden;
  position: relative;
  height: 168px;
  width: 100%;
`;

const DIV_CARDS = styled.div`
  display: flex;
  background: ${(props) => props.color};
  position: absolute;
  top: 0;
  width: 100%;

  &.slide {
    transform: translateX(-100%);
    transition: transform 500ms ease;

    @media (min-width: 720px) {
      transform: translateX(-50%);
    }
  }
`;

export default class HelpClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      sliding: false,
    };
    this.slide = React.createRef();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ sliding: true }, () => {
        setTimeout(() => {
          if (this.state.slide === 5) {
            this.setState({ slide: 0, sliding: false });
          } else {
            this.setState({ slide: this.state.slide + 1, sliding: false });
          }
        }, 500);
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const list = [
      'Heal from traumatic experiences',
      'Change destructive behaviors into healthy, helpful behaviors',
      'Navigate transitions in life and normal development',
      'Recognize their inner strength, potential, and worth',
      'Discover their true self',
      'Establish and enforce boundaries in their personal and professional relationships',
    ];

    return (
      <DIV_FULL>
        <h2>I have helped my clients</h2>
        <DIV_WINDOW>
          <DIV_CARDS
            ref={this.slide}
            slide={this.state.slide}
            className={this.state.sliding ? 'slide' : ''}
          >
            <Quote text={list[this.state.slide]} />
            <Quote
              text={list[this.state.slide == 5 ? 0 : this.state.slide + 1]}
            />
            <Quote
              text={
                list[
                  this.state.slide == 5
                    ? 1
                    : this.state.slide == 4
                    ? 0
                    : this.state.slide + 2
                ]
              }
            />
          </DIV_CARDS>
        </DIV_WINDOW>
      </DIV_FULL>
    );
  }
}
