function myFunction() {
  var element = document.getElementById("#buttonSidebar");
  element.classList.add("d-none");
}

$(function() {
  $('#buttonSidebar').click(function() {
    $(this).toggleClass('ml-0')
  });
});

$(function(){
  $('#buttonSidebar').click(function(){
    margin = $('#buttonSidebar').css("marginLeft")
    console.log(margin);
    if(margin != '0px'){
      $('.logo').hide();
    }else{
      $('.logo').show();
    }
  });
});