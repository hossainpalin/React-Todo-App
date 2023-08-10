import React from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Toaster
        position="top-center"
      />
    </>
  );
}

export default App;
