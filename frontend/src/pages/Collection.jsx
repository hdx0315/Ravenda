import React from 'react'
import { useEffect } from 'react';

function Collection() {


  useEffect(() => {
    document.title = 'Collections | Ravenda';
    // Reset the title when the component unmounts
    return () => {
      document.title = 'Ravenda';
    };
  }, []);

  return (
    <div>Collection</div>
  )
}

export default Collection