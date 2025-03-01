console.log("Entered myModule.js");

async function myFunction() { 
    try { 
      const result = await myPromise; 
      console.log(result); 
    } catch (error) { 
      console.log(error); 
    } 
} 
   