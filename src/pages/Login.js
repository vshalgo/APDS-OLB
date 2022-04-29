import {React} from 'react'

const Login = () => {
    // const url = '';
    // const [register, setRegister] = useState();


  return (
    <div className='registration-form'>
         <form>
            <div className="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div className="form-group">
                <input type="text" class="form-control item" id="username" placeholder="Username"/>
            </div>
            <div className="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <button type="button" class="btn btn-block create-account">Log In</button>
            </div>
        </form>
        <div className="social-media">
            <h5>Log In with social media</h5>
            <div className="social-icons">
                <a href="/"><i class="icon-social-facebook" title="Facebook"></i></a>
                <a href="/"><i class="icon-social-google" title="Google"></i></a>
                <a href="/"><i class="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Login