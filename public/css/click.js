const button = document.getElementById('add_user');
button.addEventListener('click', function(e) {
    e.preventDefault();
  console.log('button was clicked');
  let form = {
    button_id:'add_user'
  }

//   fetch('/', {method: 'POST',
//   body: JSON.stringify(_data),
// headers: {"Content-type": "application/json; charset=UTF-8","Accept":"text/html"},credentials: 'same-origin',})
// .then(function(res){
//       if(res.ok){
//         console.log('Click was recorded');
//         return res.text();
//       }
//       throw new Error('Request failed.');
//   }).catch(function(error) {
//     console.log(error);
//   });
// });

fetch("/", { 
  method:'POST', body:JSON.stringify(form),
  headers:{ "Content-Type": "application/json", "Accept":"text/html"
   }, credentials: 'same-origin', })
      .then(res=> res.text())
      .then(text=>{
  document.getElementById("unique").innerHTML= "thanks";
  // or redirect 
  })
});