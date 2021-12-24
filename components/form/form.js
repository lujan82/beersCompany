import { useSelector } from "react-redux";

const Form = ({ handleSubmit, login, setLogin, handleSubmitLogOut }) => {

  const user = useSelector(state => state.user)

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="form">
      {user.email !== ""
        ?<h2>LOGOUT</h2>
        :<h2>LOGIN</h2>
        }
      <div className="row">
        {user.email !== ""
          ? <label>Hi test@test.com</label>
          : 
          <>
            <label>Email <span>test@test.com</span></label>
            <input type="email" placeholder="Type test@test.com" name="email"  onChange={handleInput} />  
          </>
      }
      </div>
      <div className="row">
        {user.email !== ""
          ? <label>Now you can buy our beers</label>
          :
          <>
            <label>Password <span>password</span></label>
            <input type="Password" placeholder="Type password" name="password"  onChange={handleInput} />
          </>
        }
      </div>
      {user.email !== ""
        ? <button className="button" onClick={handleSubmitLogOut}>Logout</button>
        : <button className="button" onClick={handleSubmit}>Sing in</button>
      }
      <div className="form__text">©2021 All rights reserved.</div>
    </form>
  );
};

export default Form;