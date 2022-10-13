import React from 'react';
import Content from './Content';
import Footer from '../Footer/ContactFooter';
import Menu from '../Menu/index';

export default class Page extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Menu onHomepage={false} />
        <Content path={this.props.path} />
        <Footer />
      </>
    );
  }
}
