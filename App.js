
//ReactDOM.render(what,where)
ReactDOM.render(
	//React.createElement(ELEMENT,ATRIBUTE, CHILD)
	// we are creating an element h1, 
	// we donot want to provide any attributes for h1
	// Hello my friends is the child of h1
	React.createElement("h1",null,"Hello, My friends")
	,
	document.getElementById("QA")
	);
