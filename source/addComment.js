$(document).ready(function(){
  $("form").hide();

  $("#new_comment_button").click(function (){
    $("#new_comment_button").hide();
    $("form").show();
  });

  $("#form_submit").on("click", function(event) {
    event.preventDefault();
    $("form").hide();
    $("#new_comment_button").show();

    let comment = $('input[name="comment"]').val();
    let author = $('input[name="author"]').val();

    if (comment != "Your comment here...") {
      $(`<li>${comment}<span class="author">${author}</span></li>`).appendTo("#comment_list");
    }
  });
});
