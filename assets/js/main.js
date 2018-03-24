$(document).ready(function () {
  if (window.innerWidth <= 768) {
    toggleSidebar();
  }
  $('.toggle').on('click', toggleSidebar);
  $('#sidebar .inner a[role!="button"]').on('click', function () {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  });
});


function toggleSidebar() {
  $("#sidebar").toggleClass("hide");
};