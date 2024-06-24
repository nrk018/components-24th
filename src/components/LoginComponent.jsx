import React from 'react';
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import logo from "../images/MUJ-Logo.png";
import '../styles/styles.css';

const LoginComponent = ({ username, password, handleSubmit, handleUsernameChange, handlePasswordChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const onUsernameChange = (event) => {
        handleUsernameChange(event.target.value);
    };

    const onPasswordChange = (event) => {
        handlePasswordChange(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-cover' style={{ backgroundImage: `url("../images/BG_main.png")` }}>
            <div className='w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-white bg-opacity-85 text-black rounded-lg p-8 shadow-xl transform hover:scale-105 transition-transform duration-1000'>
                <form onSubmit={onSubmit}>
                    <div className='flex justify-center mb-4'>
                        <img className="w-48 h-auto" src={logo} alt="Logo" />
                    </div>
                    <h1 className='text-3xl text-center mb-6'>LOGIN</h1>
                    <div className='relative mb-6'>
                        <input
                            type="text"
                            placeholder='Username'
                            required
                            value={username}
                            onChange={onUsernameChange}
                            className='w-full h-12 px-4 pr-10 border-2 border-black rounded-full text-black focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
                        />
                        <FaUser className='absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400' />
                    </div>
                    <div className='relative mb-6'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            required
                            value={password}
                            onChange={onPasswordChange}
                            className='w-full h-12 px-4 pr-10 border-2 border-black rounded-full text-black focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200'
                        />
                        {
                            showPassword ?
                                <FaEyeSlash className='absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                :
                                <FaEye className='absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-400 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                    <button type='submit' className='w-full h-12 mt-4 bg-orange-400 text-white rounded-full block hover:bg-orange-500 focus:outline-none focus:bg-orange-500'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;