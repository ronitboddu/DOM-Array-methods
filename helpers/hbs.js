const { JSDOM } = require("jsdom");
//const { JSDOM } = new JSDOM('./views/home');
let jsdom;

module.exports={
    print: function(){
        console.log('print');
    }
    
}

// async function (){
//     jsdom = await JSDOM.env("./views/home.hbs", {
//         resources: "usable",
//         runScripts: "dangerously"
//       });
      
//       //console.log(jsdom.window.document.getElementById("add_user").innerHTML)


