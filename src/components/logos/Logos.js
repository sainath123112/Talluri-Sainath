import "./Logos.css";

function Logos(props)
{
    return(
        <>
            <i style={{color:props.color}} className="fa-brands fa-react react-logo"></i>
            <i style={{color:props.color}} className="fa-brands fa-html5 html-logo"></i>
            <i style={{color:props.color}} className="fa-brands fa-css3-alt css-logo"></i>
            <i style={{color:props.color}} className="fa-brands fa-square-js js-logo"></i>
            <i style={{color:props.color}} className="fa-brands fa-github github-logo"></i>
        </>
    );
}

export default Logos;