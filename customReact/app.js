function customRender(renderElement, container){

    // let domRender = document.createElement(renderElement.type);

    // domRender.innerHTML = renderElement.Children;

    // domRender.setAttribute('href', renderElement.props.href);
    // domRender.setAttribute('target', renderElement.props.target);

    // container.appendChild(domRender);

    let domRender = document.createElement(renderElement.type);
    domRender.innerHTML = renderElement.Children;
    for (const prop in renderElement.props) {
        // if(prop === 'children')continue;
       domRender.setAttribute(prop, renderElement.props[prop])
        }
        container.appendChild(domRender)
    }




const renderElement ={
    type : "a",
    props:{
        href : "https://www.google.com/",
        target : "blank"
    },

    Children : "click here to open google"
}
const mainContainer = document.querySelector('#root');

customRender(renderElement, mainContainer);