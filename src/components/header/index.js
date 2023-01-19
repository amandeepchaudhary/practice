
const Header = (props) =>{
    // const defa = props.firstName? props.firstName : "Enter First Name or Click on Click me";
    return(
        <>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="container">
                {props.firstName && <span>{props.firstName}</span>}  {/*
                Another way of conditional Rendering without ternary Operator*/}
                {!props.firstName && <span>No Value Found</span>}
                {/* {defa} */}
                {props.lastName}
            </div>
          </a>
        </>
    )
}

export default Header;