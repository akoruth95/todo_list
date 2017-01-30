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
      this.todoItem.push({
        currentTitle: this.title,
        currentContent: this.content
      })
    }
  }
});
