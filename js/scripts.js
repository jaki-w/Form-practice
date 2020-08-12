

$(document).ready(function() {
  $("#letterInput").submit(function() {
    const userName= $("input#letterInput").val();

    $("#userName").text(userName.toUpperCase());
    $(".letter").show();
    $(".letter p#dynamicInput").text("odfaldfnkajfoeifasldfjoaefiajsfdjiaoefafojs");
    event.preventDefault();

  });
});