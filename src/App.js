import React from 'react';
import { WeatherProvider } from './context/WeatherProvider';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <WeatherProvider>
      <AppContainer>
        <Header />
        <Content>
          <SearchBar />
          <WeatherList />
        </Content>
        <Footer />
      </AppContainer>
    </WeatherProvider>
  );
}

export default App;
