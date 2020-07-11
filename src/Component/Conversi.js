import React from 'react';
import {FaUserEdit} from 'react-icons/fa'
// lifting-state-up
class Conversi extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           kilometer: "",
           desimeter: "",
           meter: "",
           centimeter : "",
           milimeter : ""
        }
        this.onChangeKilometer = this.onChangeKilometer.bind(this)
        this.onChangeMeter = this.onChangeMeter.bind(this)
        this.onChangeDesimeter = this.onChangeDesimeter.bind(this)
        this.onChangeCentimeter = this.onChangeCentimeter.bind(this)
        this.onChangeMilimeter = this.onChangeMilimeter.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
     }
     onChangeKilometer(e) {
         let kilometer = e.target.value
         let meter = (parseFloat(kilometer) * 1000).toString()
         let desimeter = (parseFloat(kilometer) * 10000).toString()
         let centimeter = (parseFloat(kilometer) * 100000).toString()
         let milimeter = (parseFloat(kilometer) * 1000000).toString()
         this.setState({kilometer,meter,desimeter,centimeter,milimeter})
     }
     onChangeMeter(e) {
         let meter = e.target.value
         let kilometer = (parseFloat(meter) / 1000).toString()
         let desimeter = (parseFloat(meter) * 10).toString()
         let centimeter = (parseFloat(meter) * 100).toString()
         let milimeter = (parseFloat(meter) * 1000).toString()
         this.setState({kilometer,meter,desimeter,centimeter,milimeter})
     }
     onChangeDesimeter(e) {
         let desimeter = e.target.value
         let kilometer = (parseFloat(desimeter) / 10000).toString()
         let meter = (parseFloat(desimeter) / 10).toString()
         let centimeter = (parseFloat(desimeter) / 10).toString()
         let milimeter = (parseFloat(desimeter) * 100).toString()
         this.setState({kilometer,meter,desimeter,centimeter,milimeter})
     }
     onChangeCentimeter(e) {
         let centimeter = e.target.value
         let kilometer = (parseFloat(centimeter) / 100000).toString()
         let meter = (parseFloat(centimeter) / 100).toString()
         let desimeter =(parseFloat(centimeter) / 10).toString()
         let milimeter = (parseFloat(centimeter) * 10).toString()
         this.setState({kilometer,meter,desimeter,centimeter,milimeter})
     }
     onChangeMilimeter(e) {
         let milimeter = e.target.value
         let kilometer = (parseFloat(milimeter) / 100000).toString()
         let meter = (parseFloat(milimeter) / 1000).toString()
         let desimeter = (parseFloat(milimeter) / 100).toString()
         let centimeter = (parseFloat(milimeter) / 10).toString()
         this.setState({kilometer,meter,desimeter,centimeter,milimeter})
     }
     onSubmit(event) {
        alert(`Terimakasih`)
         event.preventDafault()
         event.stopProgation()
     }
    render() {
        const {kilometer,meter,desimeter,centimeter,milimeter} = this.state
        return (
          <>
           <div className="div">
               <br></br>
            <form onSubmit={this.onSubmit}>
                <br></br>
            <label>
                Kilometer
            </label> <br></br>
            <input type="number" value={kilometer} onChange={this.onChangeKilometer} /> <br></br><br></br>
            <label>
                Meter
          </label> <br></br>
          <input  type="number" value={meter} onChange={this.onChangeMeter} /> <br></br><br></br>
            <label>
                Desimeter
            </label> <br></br>
            <input type="number" value={desimeter} onChange={this.onChangeDesimeter} /> <br></br><br></br>
            <label>
                Centimeter
          </label> <br></br>
          <input  type="number" value={centimeter} onChange={this.onChangeCentimeter} /> <br></br><br></br>
            <label>
                Milimeter
            </label> <br></br>
            <input type="number" value={milimeter} onChange={this.onChangeMilimeter} /> <br></br><br></br>
                 <button>Klik</button>            
          </form>
          </div>
          <div className="penulis cf">
                <FaUserEdit  className="user" size="8rem" color="lightblue" /> 
                <p style={{fontFamily:"fertigo"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>               
            </div>
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
export default Conversi