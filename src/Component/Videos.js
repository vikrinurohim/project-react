import React from 'react';
import ReactPlayer from 'react-player'
import {FaUserEdit} from "react-icons/fa"
class Videos extends React.Component {
    render() {
        return (
            <>
         <div className="video">  
            <ReactPlayer  width="500px" url="https://www.youtube.com/watch?v=Bg9P1V9e6I4&t=273s" />
            </div>
                        <div className="penulis cf">
                        <FaUserEdit  className="user" size="8rem" color="lightblue" /> 
                        <p style={{fontFamily:"fertigo"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>               
                    </div>
            </>
        )
    }
}
export default Videos