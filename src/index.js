// D3 is a huge graphic rendering library, import everything for now (Optimise later)

import Comics from './comics';


// Register to the global scope
(function(window){
  const _init = (params)=>{
    Comics.init(params);
   }
   window.AdaliaComics = {
     init:_init
   }
 })(window)
 