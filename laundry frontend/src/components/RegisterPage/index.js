import LoginHeader from "../Header";
import LoginFooter from "../Footer";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import './index.css';

function RegisterPage(){
    const history = useHistory();

    const register = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:3070/register", {
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
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                    password: e.target.password.value,
                    state: e.target.state.value,
                    district: e.target.district.value,
                    address: e.target.address.value,
                    pincode: e.target.pincode.value
                }) // body data type must match "Content-Type" header
            });
            if(response.status === 200){
                console.log("Successfully added user")
            }

        } catch(e) {
            alert("failed", e);
        }
        history.push('/');
    }

    return(
        <div>
            <LoginHeader/>
            <div className="signin-1">
                <div className="signin-left register-left">
                    <h1 className="register-h1">Laundry</h1>
                    <h1 className="register-h1">Service</h1>
                    <h3 className="register-h3">Doorstep Wash &</h3>
                    <h3 className="h3-two">Dryclean Service</h3>
                    <h3 className="left-h">Already have An Account</h3>
                    <Link to="/"><button type="button" className="btn btn-outline-primary reg-btn-1">Signin</button></Link>
                </div>
                <div className="signin-right register-right">
                    <h1 Style={"margin-top:50px;"}>REGISTER</h1>
                    <form className="form-div" onSubmit={(e)=>{register(e)}}>
                        <div className="form-row-1">
                            <input type="text"  className="inp-box" name="name" placeholder="Name"/>
                            <input type="email" className="inp-box" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-row-2">
                            <input type="tel" className="inp-box" name="phone" placeholder="Phone"/>
                            <input type="password" className="inp-box" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-row-3">
                            <input type="text" className="inp-box" name="state" placeholder="State"/>
                            <input type="text" className="inp-box" name="district" placeholder="District"/>
                        </div>
                        <div className="form-row-4">
                            <input type="text" className="inp-box" name="address" placeholder="Address"/>
                            <input type="text" className="inp-box" name="pincode" placeholder="Pincode"/>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/><u> I agree to Terms & Condition, receiving marketing and promotional materials</u></label>
                        </div>
                        <div className="click">
                            <button type="submit" className="btn btn-primary" Style={"background: #5861AE;"}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <LoginFooter/>
        </div>
    )
}

export default RegisterPage;