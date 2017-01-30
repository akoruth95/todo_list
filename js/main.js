// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    title: "",
    content: "",
    todoItem: [

  ]
  },
  methods: {
    createTodo: function() {
      if (this.title == "" || this.content == "") {//no creation of todoitem allowed if either field is empty
        alert("Title or content is missing.")
        return;
      } else {
      this.todoItem.push({//add todoitem to data array
        currentTitle: this.title,
        currentContent: this.content
      })
      }
    },
    cancel: function() {//resets input boxes to be empty
      this.title = "";
      this.content = "";
    },
    deleteTodo: function(index) {
      this.todoItem.splice(index, 1);//removes clicked element data from todoItem array thus removing from view
    }
  }
});
