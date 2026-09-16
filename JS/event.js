function clickJoin(button){
  if (button.innerText === "Join"){
    button.innerText = "Joined!";
    button.classList.add("joined");
    window.alert("Join Successful!");

  }else{
    button.innerText = "Join";
    button.classList.remove("joined");
    window.alert("Join Cancelled.");
  }
}