import LoginHeader from "../Header";
import LoginFooter from "../Footer";
import { setToken } from "../utils/authOperations"
import './index.css';
import {Link} from "react-router-dom";
// import lock from "../../assets/padlock.svg"

function HomePage(){
    
    const login = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:3070/login", {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    string: e.target.string.value,
                    password: e.target.password.value
                }) // body data type must match "Content-Type" header
            });
            //console.log(response);

            const { token} = await response.json();

            setToken(token);
            // window.location.href = "/posts";
            window.location.href = "/orders";

        }

        
         catch(e) {
            console.log(e);
            alert("failed");
        }
        
    }


    return(
        <div>
            <LoginHeader/>
            <div className="signin-1">
                <div className="signin-left">
                    <div className="left-one">
                        <h1 className="left-h1">Laundry</h1>
                        <h1 className="left-h1">Service</h1>
                        <h3 className="left-h3">Doorstep Wash & Dryclean Service</h3>
                        <h3 className="left-h2">Don't Have An Account</h3>
                        <Link to="/register"><button type="button" className="btn btn-outline-primary reg-btn">Register</button></Link>
                    </div>
                </div>
                <div className="signin-right">
                    <h1>SIGN IN</h1>
                    <form className="form-main" onSubmit={(e)=>{login(e)}}>
                        <div className="form-group">
                            <input name="string" type="email" className="reg-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile / Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="reg-email" name="password" placeholder="Password"/>
                        </div>
                        <div>
                            <p className="pass">Forget Password ?</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <LoginFooter/>
        </div>
    );
}

export default HomePage;