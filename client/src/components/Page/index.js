import React from 'react';
import Header from '../Header/index';
import Content from './Content';
import Footer from '../Footer/ContactFooter';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header path={this.props.path} home_page={false}></Header>
        {!this.props.path.includes('contact') && (
          <Content path={this.props.path} />
        )}
        <Footer />
      </>
    );
  }
}
