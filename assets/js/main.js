$(document).ready(function () {
  $(".toggle").click(function () {
    var w = $('#sidebar').width();
    $("#sidebar").toggleClass("hide");
  });
});