import React, { useState } from 'react';
import { useRegister } from '../hooks/auth/useRegister';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {register, isLoading, error} = useRegister(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(email, password);
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email:</label>
            <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}/>

            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}} />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Register