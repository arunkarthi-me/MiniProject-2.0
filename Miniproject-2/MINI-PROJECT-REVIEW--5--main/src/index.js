import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayPage from './DisplayPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './Details';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   
     <Routes>
      <Route path='/' element={<App></App>}/>
      <Route path='/Main' element={<DisplayPage></DisplayPage>}/>
      <Route path='/details' element={<Detail></Detail>}/>
      

     </Routes>

    
    
    
    
    </BrowserRouter>

   
  
);

 