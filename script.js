// //  changecolor
//  function changecolor() {
//     let color=document.getElementById("colorinputbox").value;
//     document.body.style.backgroundColor =color;
//  }

//  message
function changeColor(changecolor) {
  let NameInput = document.querySelector("#NameInput");
  let message = document.querySelector("#message");
//   let colorinputbox=document.querySelector("colorinputbox");
  let color=document.getElementById("colorinputbox").value;
    document.body.style.backgroundColor =color;

  message.innerHTML = "Hi, " + NameInput.value+"! The color is "+color;



  localStorage.setItem('Is_NameInput', NameInput.value);
  localStorage.setItem('Is_color', color);
 


}

