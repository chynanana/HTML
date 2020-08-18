// creating a ReUSable component 
// we will pasing the properties to the component
class CustomLink extends React.Component{
    render(){
        // propers is the object which will recieve the custom properties
        // send while the element of this component is being created
        // so 
        // this.props.href
        // this.props.text
        console.log(this.props);
        var Component=React.createElement("a",{href:this.props.T1},this.props.text);
        return Component;
    }
}
const div1=document.getElementById("QA1");
/*
{href:"http://www.bbc.co.uk","text":"BBC"}
are the custom properties which we want to pass to the component
these values will be pass to the props object of the component object
*/
const firstLink=React.createElement(CustomLink,{T1:"http://www.bbc.co.uk",text:"BBc"});
const secondLink=React.createElement(CustomLink,{T1:"http://www.cnn.com",text:"Cnn"});
const thirdLink=React.createElement(CustomLink,{T1:"http://www.google.com",text:"Google"});
const linklist=React.createElement("div",null,firstLink,secondLink,thirdLink)
ReactDOM.render(linklist,div1)