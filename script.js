function menuClick(option, items) {

  thisid=option.id;

  alldivs=document.getElementsByClassName("visible")

  for (let data of alldivs) {
    console.log(data.id)
    document.getElementById(data.id).className="invisible";
  }
  document.getElementById(items).className="visible";
}
