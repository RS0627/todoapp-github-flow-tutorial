$("#addTodoButton").click(function() {
    const inputTodo = $("#newTodoInput").val().trim();
  
    if (!inputTodo) {
      return;
    }
  
    const todoItem = $("<li>").append(
      $("<input>").attr("type", "checkbox"),
      $("<span>").text(inputTodo)
    );
  
    $("#todoList").append(todoItem);
    $("#newTodoInput").val("");
});

$("#todoList").on("click", "input[type=checkbox]", function() {
    const isChecked = $(this).is(":checked");
    const parentItem = $(this).parent();
  
    parentItem.toggleClass("done", isChecked);
});
