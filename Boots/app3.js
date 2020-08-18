// the first parameter of the CreateElemnt can be 
// 1. String (OR)
// 2. customer component

class CustomComponent extends React.Component{
    render(){
        var component=React.createElement("h1",null," Hello my friends ");
        return component;
    }
}
var firstComponent=React.createElement(CustomComponent,null);
const div1=document.getElementById("QA1");
ReactDOM.render(firstComponent,div1)