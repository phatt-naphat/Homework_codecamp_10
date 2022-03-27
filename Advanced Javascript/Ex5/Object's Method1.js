let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()


// alert "John"
