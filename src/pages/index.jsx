import React, { Component } from 'react';
import { Parallax } from 'react-spring/dist/addons';
import { Communities } from '../components/index/Communities';
import { Product } from '../components/index/Product';
import { Visions } from '../components/index/Visions';
import { Welcome } from '../components/index/Welcome';
import { Navbar } from '../components/Navbar';
import SEO from '../components/SEO';
import { Content } from '../styles';
import '../styles/global';

class Index extends Component {
  state = { scrollTop: 0, width: 0 };

  componentDidMount() {
    this.setState({ width: window.outerWidth });
  }

  handelScroll(event) {
    this.setState({ scrollTop: event.target.scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    return (
      <React.Fragment>
        <SEO />
        <div onScroll={event => this.handelScroll(event)}>
          <Navbar scrollTop={scrollTop} />
          <Parallax pages={4}>
            <Content speed={this.state.width < 575.98 ? 0.375 : 0.75} offset={0} factor={1}>
              <Welcome />
            </Content>
            <Content speed={this.state.width < 575.98 ? 0.45 : 0.9} offset={0.95} factor={1}>
              <Visions />
            </Content>
            <Content speed={this.state.width < 575.98 ? 0.45 : 0.9} offset={1} factor={1}>
              <Communities />
            </Content>
            <Content
              speed={this.state.width < 575.98 ? 0.2 : 0.4}
              offset={this.state.width < 575.98 ? 1.5 : 1.89}
              factor={1}
              style={{ backgroundColor: '#1A1A18' }}
            >
              <Product />
            </Content>
          </Parallax>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
