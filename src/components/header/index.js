
const Header = (props) =>{
    const defa = props.firstName? props.firstName : "Enter First Name or Click on Click me";
    return(
        <>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="container">
                {defa}
                {props.lastName}
            </div>
          </a>
        </>
    )
}

export default Header;