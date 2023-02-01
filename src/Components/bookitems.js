import React from 'react';


function Bookitems({image}) {
    return (
        <div className='p-5'>
        <div className="rounded-md border-2 scale-80 hover:scale-100 ease-in duration-500">
        <img src={image}></img>
        </div>
        </div>
    );
}
export default Bookitems;
