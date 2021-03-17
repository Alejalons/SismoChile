import React from 'react';
import EarthQuakerProvider from './component/Context/EarthquakesContext';
import Header from './component/Header/Header';
import DetailsContainer from './component/SectionDetails/DetailsContainer';

function App() {
  return (
    <>
      <EarthQuakerProvider>
        <Header />

        <DetailsContainer />
      </EarthQuakerProvider> 
    </>
  );
}

export default App;
