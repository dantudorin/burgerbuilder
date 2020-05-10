import React from 'react';
import Layout from './hoc/Layout/Layout';
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
