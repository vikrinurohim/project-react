import React from 'react';
import {FaUserCircle} from 'react-icons/fa'
import {FaUserEdit} from "react-icons/fa";
class LogIn extends React.Component {
    constructor(props) {
        super(props) 
            this.inputName = React.createRef()
            this.inputEmail = React.createRef()
            this.inputPassword = React.createRef()
            this.inputPekerjaan = React.createRef()
            this.inputJenisKelamin = React.createRef()
            
          }
          onSubmit = (event) => {
            alert("Terimakasih")
            const {name,pekerjaan,alamat} = this.state
            event.stopProgation()
            event.preventDefault()
        }
        
    render() {
        return (
        <React.Fragment>
            {/* form uncontrolled */}
            <p className="masuk"><FaUserCircle color="blue" size="4rem" /></p>
            <div className="form">
                <form onSubmit={this.onSubmit}>
                <label>
                   Name:
                   </label> <br></br>
                   <input name="name" type="text" ref={this.inputName}   /> <br></br>
                   <label>
                   Email
                   </label><br></br>
                   <input name="email" type="email" ref={this.inputEmail}  /> <br></br>
                   <label></label>
                   <label>
                   Password
                   </label><br></br>
                   <input name="password" type="password" ref={this.inputPassword}  /> <br></br>
                   <label></label>
                    <label>
                   Pekerjaan
                   </label><br></br>
                   <input name="pekerjaan" type="text" ref={this.inputPekerjaan}  /> <br></br>
                   <label>
                   Laki-laki
                   <input name="JenisKelamin" type="radio" ref={this.inputJenisKelamin} />
               </label>
               <label>
                   Perempuan
                   <input name="JenisKelamin" type="radio" ref={this.inputJenisKelamin} />
               </label><br></br>
               <label>Agama</label>
               <select>
                  <option>Islam</option>
                  <option>Kristen</option>
                  <option>Buddha</option>
               </select> <br></br>
               <label>Pengalaman</label> <br></br>
               <textarea style={{height: "40px",width: "180px"}}></textarea> <br></br>
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