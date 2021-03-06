import React, { Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Import assets
import 'modern-normalize/modern-normalize.css';
import woff2 from '../public/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../public/fonts/open-sans-v16-latin-regular.woff';

const Timer = React.lazy(() => import('./components/Timer'));

const Header = styled.h1`
    font-size: 25px;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto 30px;
    max-width: 50em;
    padding-left: 15px;
    padding-right: 15px;
`;

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #212121;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    text-align: center;
  }
`;

// Main page
const App = () => (
  <Container>
    <Header>
      When I can eat?
    </Header>
    <Suspense fallback={<div>Loading...</div>}>
      <Timer />
    </Suspense>
    <GlobalStyle />
  </Container>
);

export default App;
