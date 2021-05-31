import React from 'react';

function App(){
    let curDate= new Date( 2020,3,5,23);
curDate=curDate.getHours();
let greeting="";
const cssStyle={ };

if (curDate >=1 && curDate< 12){
  greeting="Good Morning";
  cssStyle.color="green";
} else if ( curDate>=12 && curDate <19){
   greeting="Good Afternoon";
   cssStyle.color="orange";
}else {
  greeting="Good Nigh";
  cssStyle.color="black";
}
return (
  <>
       <div>
           <h1> Hello sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    </>
); 
}
export default App;