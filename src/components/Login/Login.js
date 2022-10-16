import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div>
                    <div className='login-border'>
                        <div className='or-border'></div>
                        <p>or</p>
                        <div className='or-border'></div>
                    </div>
                </div>
                <button type="button" className="login-with-google-btn" >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;