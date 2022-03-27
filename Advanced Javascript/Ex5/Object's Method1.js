let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()


// Error

let user = {
  name: "John",
  go: function() { alert(this.name) }
};

(user.go)()

// Have to add ; at the end of let{} Then it represented alert"John"
