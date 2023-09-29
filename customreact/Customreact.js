
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    container.appenChild(domElement);
}




const reactElement = {
    type: "a",
    props: {
        href: "https: // google.com",
        target: "_blank"
    
    },

    childern: "click me to visit here"
};




const mainContainer = document.getElementById("root");
costomRender(reactElement, mainContainer)