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

    @media (min-width: 800px) {
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
      interval: '',
    };
    this.quotes = [
      'Heal from traumatic experiences',
      'Change destructive behaviors into healthy, helpful behaviors',
      'Navigate transitions in life and normal development',
      'Recognize their inner strength, potential, and worth',
      'Discover their true self',
      'Establish and enforce boundaries in their personal and professional relationships',
    ];
    this.slideRef = React.createRef();
  }

  componentDidMount() {
    const intervalID = setInterval(() => {
      this.setState({ sliding: true }, () => {
        setTimeout(() => {
          if (this.state.slide === this.quotes.length - 1) {
            this.setState({ slide: 0, sliding: false });
          } else {
            this.setState({ slide: this.state.slide + 1, sliding: false });
          }
        }, 500);
      });
    }, 3500);
    this.setState({ interval: intervalID });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { slide, sliding } = this.state;
    const quotes = this.quotes;
    return (
      <DIV_FULL>
        <h2>I have helped my clients</h2>
        <DIV_WINDOW>
          <DIV_CARDS
            ref={this.slideRef}
            slide={slide}
            className={sliding ? 'slide' : ''}
          >
            <Quote text={quotes[slide]} />
            <Quote text={quotes[slide === quotes.length - 1 ? 0 : slide + 1]} />
            <Quote
              text={
                quotes[
                  slide === quotes.length - 1
                    ? 1
                    : slide === quotes.length - 2
                    ? 0
                    : slide + 2
                ]
              }
            />
          </DIV_CARDS>
        </DIV_WINDOW>
      </DIV_FULL>
    );
  }
}
