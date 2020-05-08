import React from 'react';
import Layout from './components/Layout/Layout';
import BugerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div >
      <Layout >  
        <BugerBuilder />
      </Layout>
    </div>
  );
}

export default App;
