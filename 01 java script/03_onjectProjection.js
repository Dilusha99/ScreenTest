function  projectObject(src,proto) {

    const result = {};
 
    for(let key in proto) {
         if(src.hasOwnProperty(key)){           // checking the selected property is property of the source
             if (typeof proto[key] === 'object' && proto[key] !== null){         // checking proto value is not null and weather it is an object
                 if(src[key] && src[key]=== 'object' && src[key] !== null){   // checking source value is not null and weather it is an object
                     result[key] = projectObject(src[key],proto[key]);       // continue as neasted loop
             } else {
                 result[key] = src[key]   // assign values to the 'result' object
               };
         };
     }
 }
     return result;
 };
 
 // input objects
 const src = {
     prop11:{
         prop21: 21,
         prop22:{
             prop31: 31,
             prop32: 32
         }
     },
     prop12 : 12
 };
 
 const proto = {
     prop11:{
         prop22: null
     }    
 };
 const resultObject = projectObject(src,proto);   //test case
 // console output
 console.log(resultObject);