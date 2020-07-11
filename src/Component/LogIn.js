import React from 'react';
import {FaUserCircle} from 'react-icons/fa'
import {FaUserEdit} from "react-icons/fa";
class LogIn extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                email : '',
                password :""
            }
            this.onChange = this.onChange.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
        }
        onChange(event) {
            const {name,value} = event.target
            this.setState({[name] :value})
        }
        onSubmit(event) {
            event.preventDefault()
            event.stopProgation()
        }
    
    render() {
        const {email,password} = this.state
        return (
        <React.Fragment>
            {/* form controlled */}
            <p className="masuk"><FaUserCircle color="blue" size="4rem" /></p>
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <label>
                        Email
                    </label><br></br><br></br>
                    <input type="text" value={email} onChange={this.onChange}/> <br></br><br></br>
                    <label>
                        Password
                    </label><br></br><br></br>
                    <input type="password" value={password} onChange={this.onChange}/> <br></br>
                    <button className="kirim">Klik</button>                
                </form>
            </div>
            {/* penulis */}
            <div className="penulis cf">
                <FaUserEdit  className="user" size="8rem" color="lightblue" /> 
                <p style={{fontFamily:"fertigo"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>               
            </div>
            {/* footer */}
            <div className="footer">
                        <ul className="ul">
                            <li>Tentang Kami</li>
                            <br></br>
                            <li>FAQ</li>
                        </ul><br></br>
                        <p>Copyright@anonim2020</p>
                    </div>
                
            </React.Fragment>
        )
    }
}
export default LogIn