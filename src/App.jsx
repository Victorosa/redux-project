import React from 'react';
import Navbar from './react-files/navbar.jsx'
import Leftbar from './react-files/leftbar.jsx'
import Form from './react-files/form.jsx'
import Rightbar from './react-files/rightbar.jsx'

function App() {
  return (
    <div className="app">
          <Navbar/>
       <div className="lfr">
          <Leftbar/>
          <Form/>
          <Rightbar/>   
      </div>
    </div>
  );
}

export default App;
