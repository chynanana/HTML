< a href='http://www.bbc.co.uk' ,target="_blank", title="BBC news"> News </a>
var a=React.createElement("a",
        {   href:"http://www.bbc.co.uk",
            target:"_blank",
            title:"BBC News"
        },
        " News");
var QA=document.getElementById("QA");
ReactDOM.render(a,QA);

//ReactDOM.render(what,where)
//React.createElement(ELEMENT,ATRIBUTE, CHILD)
    // we are creating an element anchor element, 
    // the second parameter of the createElement is th e
    // attribute which will always be an object, it canot be a string
    // News is the child of anchor tag
/*
we can create the object of and pass it to render method
*/
const a1=React.createElement("a",{href:"http://www.bbc.co.uk",target:"_blank","title":"BBC News"}," BBC News  ");
const a2=React.createElement("a",{href:"http://www.cnn.com",target:"_blank","title":"CNN News"}," Cnn News ");
const ref1=React.createElement("a",{href:"http://www.qa.com",target:"_blank","title":"metro"}," QA Limited ");
const ref2=React.createElement("a",{href:"http://www.google.com",target:"_blank","title":"metro"}," google ");

const div1=React.createElement("div",{"style":{"background-color":"red"}},[a1,a2])
const div2=React.createElement("div",{"style":{"background-color":"green"}},[a1,a2])
const div3=React.createElement("div",{"style":{"background-color":"green"}},[ref1,ref2])
const mainDiv=React.createElement("div",{"style":{"background-color":"green"}},[div1,div2,div3])
const QA1=document.getElementById("QA1");
ReactDOM.render(mainDiv,QA1);