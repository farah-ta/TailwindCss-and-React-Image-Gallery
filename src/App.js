import React from 'react';
import { Booklist } from './booksdata/booklist.js';
import Bookitems from './Components/bookitems.js';

import './App.css';

function App() {

  return (
    
        <div className='bg-background bg-center'>
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
     <h1 className="text-3xl font-bold text-center p-4">
      Images Gallery with Tailwind CSS
    </h1>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3'> 
    
        {Booklist.map((bookitems, key) => 
          (
         <Bookitems
         key={key}
         image={bookitems.image}
         
         />
          ))}
          </div>

        </div> 
      
        </div>
          );
          }
  
export default App;
