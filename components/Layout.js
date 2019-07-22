import React from "react";
import throttle from "lodash.throttle";
import styled from "styled-components";
import constants from "./constants";
import Sidebar from "./sidebar";
import Header from "./header";
import Meta from "./meta";
// import Shader from "./shader";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: visible;
  display: flex;

  transition: left 0.3s;
  @media (max-width: ${constants.mobile}px) {
    width: auto;
    left: -100vw;
    &.menu {
      left: 0;
    }
  }
`;

const SidebarWrapper = styled.div`
width: 270px;
-webkit-overflow-scrolling: touch;
@media (max-width: ${constants.mobile}px) {
  width: 82vw;
}
`;

const BodyColumn = styled.div`
flex: 1;
position: relative;
@media (max-width: ${constants.mobile}px) {
  width: 100vw;
}
`;

const MainWrapper = styled.main`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
overflow: auto;
-webkit-overflow-scrolling: touch;
`;

const HeaderWrapper = styled.div`
position: absolute;
top: 0;
width: 100%;
z-index: 2;
`;

class Layout extends React.Component {
  // static getInitialProps = async ({ pathname }) => ({
  //     path: pathname
  // });

  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      if (
        typeof navigator !== "undefined" &&
        "serviceWorker" in navigator
      ) {
        navigator.serviceWorker
        .register("/sw.js")
        .then(console.log) // eslint-disable-line
        .catch(console.error); // eslint-disable-line
      }
    }

    if (this.body) {
      this.body.addEventListener("scroll", this.watchScroll);
    }

    this.watchScroll();
    // this.props.dispatch(hideMenu());
  }

  componentWillUnmount() {
    if (this.body) {
      this.body.removeEventListener("scroll", this.watchScroll);
    }
  }

  watchScroll = throttle(() => {
    if (this.body) {
      // this.props.dispatch(
      //   this.body.scrollTop > 100 ? showHeader() : hideHeader()
      // );
    }
  }, 100);

  url() {
    return `https://veda.gl${this.props.path}`;
  }

  siteName() {
    return constants.og.title;
  }

  title() {
    const article =
    this.props.article[this.props.lang] || this.props.article.en;
    return (
      (article.title ? article.title + " | " : "") + constants.og.title
    );
  }

  description() {
    return this.props.article.description || constants.og.description;
  }

  image() {
    return this.props.article.image || constants.og.image;
  }

  setBody = (el) => {
    this.body = el;
  };

  render() {
    const sc = this.props.isMenuVisible ? "menu" : "";

    return (
      <div>
        <Meta/>
        <Wrapper className={sc}>
          <SidebarWrapper className={sc}>
            <Sidebar path={this.props.path} />
          </SidebarWrapper>
          <BodyColumn>
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
            <MainWrapper ref={this.setBody} className="body">
              {this.props.children}
            </MainWrapper>
          </BodyColumn>
        </Wrapper>
        {/* <Shader shader={this.props.shader} /> */}
      </div>
    );
  }
}

export default Layout;
