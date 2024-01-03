import SectionTitle from "../sectionTitle/sectionTitle";
import { IoMdCheckmarkCircle } from 'react-icons/io'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './index.css'
const SellingForm = () => {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    return (
        <>
            <SectionTitle title='sell your Scooter' />
            <div className="sell-container">
                <div className="form-container" >
                    <form>
                        <div className="input-row  ">

                            <div className="input-container">
                                <label htmlFor="your name">Enter your name</label>
                                <input type='text' placeholder="Enter Your Name" className="input" />
                            </div>
                            <div className="input-container">
                                <label htmlFor="your phone">Enter your phone</label>
                                <input type='text' placeholder="Enter Your Phone Number" className="input" />
                            </div>
                        </div>
                        <div className="input-row  ">
                            <div className="input-container">
                                <label htmlFor="your Email">Enter your Email</label>
                                <input type='email' placeholder="Enter Your Email" className="input" />
                            </div>
                            <div className="input-container">
                                <label htmlFor="your Email">Enter Meeting Point</label>
                                <input type='text' placeholder="Enter Meeting Point" className="input" />

                            </div>
                        </div>

                        <div className="input-row d-flex">
                            <div className="input-container">
                                <label htmlFor="your Email">Enter Bike type</label>
                                <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="input" />

                            </div>

                        </div>
                        <div>
                            <textarea placeholder="Any Note..." className="input-textArea" />

                        </div>
                        <button className=" btn-submit ">Submit</button>
                    </form>
                </div>
                <div className="steps">
                    <h2>Steps For Selling .</h2>
                    <ul>
                        <li > <span style={{ margin: '0 8px' }}><IoMdCheckmarkCircle style={{ fontSize: '32px', color: '#27c8a3' }} /></span> <p style={{ display: 'inline-block' }}>fill the Feilds with the required Info</p></li>
                        <li> <span style={{ margin: '0 8px' }}><IoMdCheckmarkCircle style={{ fontSize: '32px', color: '#27c8a3' }} /></span> <p style={{ display: 'inline-block' }}>Once Done. you will receive  a call from our team</p></li>
                        <li> <span style={{ margin: '0 8px' }}><IoMdCheckmarkCircle style={{ fontSize: '32px', color: '#27c8a3' }} /></span> <p style={{ display: 'inline-block' }}>we will confirm an appointment</p> </li>
                        <li> <span style={{ margin: '0 8px' }}><IoMdCheckmarkCircle style={{ fontSize: '32px', color: '#27c8a3' }} /></span> <p style={{ display: 'inline-block' }}>Check Status of the Bike & start Selling process</p></li>
                        <li> <span style={{ margin: '0 8px' }}><IoMdCheckmarkCircle style={{ fontSize: '32px', color: '#27c8a3' }} /></span><p style={{ display: 'inline-block' }}>The process will not take more than 20 mins</p> </li>


                    </ul>
                </div>
            </div>
        </>
    );
}

export default SellingForm;