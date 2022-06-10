import React from 'react';
import Books from './components/Books';
import Favlist from './components/Favlist';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      
      <Header/>
     
      <Favlist/>
      <Books/>
      <Footer/>
    </div>
  );
}

export default App;
