import './index.css';
function LoginHeader(){
    return(
        <nav className="navbar navbar-inverse nav-width nav-head p-0">
        <div className="justify">
            <ul className="nav navbar-nav ul-justify">
                <div>
                    <li className="active"><h4>LAUNDRY</h4></li>
                </div>
                <li className="width">Home</li>
                <li className="width">Pricing</li>
                <li className="width">Career</li>
                <div className="signin-div">
                    <li className="width text-white">Sign In</li>
                </div>
            </ul>
        </div>
        </nav>
    );
}

export default LoginHeader;