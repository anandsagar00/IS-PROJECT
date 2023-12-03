import {useState} from 'react';
import { authentication } from './firebase-config';
import { RecaptchaVerifier,signInWithPhoneNumber,  } from "firebase/auth";
import './App.css';
function App()
{
  const[phoneNumber,setPhoneNumber]= useState("");
  const[expandForm,setExpandForm]=useState(false);
  const[show,setShow]  = useState(true)
  const[show1,setShow1]  = useState(false)
  const[show2,setShow2]  = useState("")
  const [flag,setFlag] = useState(false)
  const[OTP,setOTP]=useState('')
  const [cr,setCR]= useState({})

const generateRecaptcha = () => {
  const recaptchaContainer = document.getElementById('recaptcha-container');
  if(show){
  window.recaptchaVerifier = new RecaptchaVerifier(recaptchaContainer, {
    'size': 'normal',
    'callback': (response) => {
      setFlag(true);
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
    },
    'expired-callback': () => {
      // Response expired. Ask the user to solve reCAPTCHA again.
      // ... change krdo isko to use VISIBLE CAPTCHA WLAA  
    }
  }, authentication);
}
}


  const requestOTP=(e)=>{
    e.preventDefault();
    if(phoneNumber.length == 13){
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier= window.recaptchaVerifier;
      signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
      .then(confirmationResult =>{
      
        window.confirmationResult=confirmationResult;
        setCR(confirmationResult)
      }).catch((error)=>{
        console.log(error);
      });
    }
    else{
      return window.alert("Phone Number is Invalid. Please Check");
    }
  }

  const verifyOTP1 = async (e) => {
    setShow(false)
    setShow1(true)
    try {
      const result = await cr.confirm(OTP);
      const user = result.user;
      console.log(user)
      if (user) {
        setShow2("Correct")
        window.alert("OTP is correct");
      }
    } catch (error) {
      window.alert("OTP is InCorrect");
      setShow2("Wrong")
      console.error("Error verifying OTP:", error);
    }
  };

  window.addEventListener('error', (event) => {
    console.error(event.error);
  });

return(
  <div className='formcontainer'>
    { !show1 ?
    <form onSubmit={requestOTP}>
      <h1 >INFORMATION SECURITY COURSE PROJECT</h1>
      <div className="main">
      <label htmlFor="phoneNumberInput" className="form-label">Please enter your Phone number</label>
      <input type="tel" className="form-control" id="phoneNumberInput" aria-describedby="emailhelp" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <div id="phoneNumberHelp" className="form-text"> </div>
      </div>
      
      {expandForm === true && flag ?
      <>
      <div className="main">
      <label htmlFor="otpInput" className="form-label">Please enter your OTP</label>
      <input type="number" className="form-control" id="otpInput" value={OTP} onChange={(e)=>{
        setOTP(e.target.value)
      }} />
      <div id="otpHelp" className="form-text"> </div>
      </div>
      <button onClick={verifyOTP1}>Verify</button>
      </>
      :
      null
      }
      {
        expandForm===false?
        <button type="submit" className="btn btn-primary">Request OTP</button>
        :
        null
      }
      <div id="recaptcha-container" style={{display: !show ? "none" : ""}}></div>
    </form> : <div style={{marginTop:"2rem"}}>
      {
        show2 == "Wrong" ?
      <h1 style={{color:"red",textAlign:"center",justifyContent:"center",display:"flex"}}>OTP is Incorrect</h1> : show2 == "Correct" ?
      <h1 style={{color:"green",textAlign:"center",display:"flex",justifyContent:"center"}}>Success OTP is Correct</h1> : null
}</div>
}
  </div>
);
    }

export default App;
