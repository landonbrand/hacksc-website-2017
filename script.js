function addEmail(){
  var promise = $.post({
    data: $(email).val(),
    url: "https://192.241.235.59:3000/api/addEmail"
  });
}

function clearText(){
  if($(email).val() == "Enter your email"){
    $(email).val("");
  }
}

function restoreText(){
  if($(email).val() == ""){
    $(email).val("Enter your email");
  }
}
