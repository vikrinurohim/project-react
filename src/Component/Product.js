import React, { Fragment } from 'react';
import  {DiReact} from 'react-icons/di';
import {connect} from "react-redux";
import {FaUserEdit} from "react-icons/fa"
class Product extends React.Component {
    render() {
        const array = ["senin","selasa","rabu","kamis","jumat","sabtu"]
        return (
            <>    
                {/* membuat penjualan sederhana */}
                 <div className="container-1">
                     <DiReact color="red" size="10rem" /> <br></br>
                     <button className="woyy" onClick={this.props.handleMinus}>-</button><button className="haii" onClick={this.props.handlePlus}>+</button>
                     <br></br><br></br>
                     <input type="text" className="input" value={this.props.order} />  
                     <br></br>
                     <br></br>
                     <h3>Total Order : {this.props.order} </h3>    
                </div>
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
            
            </>
        )
    }
}
const mapsStateToProps = (state) =>{
    return {
        order: state.totalOrder 
    }
}
const mapsDistachToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type:"ADD_CHANGE"}),
        handleMinus : () => dispatch({type:"CHANGE_VALUE"})
    }
}
export default connect(mapsStateToProps,mapsDistachToProps)(Product)