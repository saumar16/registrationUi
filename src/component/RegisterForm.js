import React, { useState } from 'react';
import axios from "axios";
const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        state: '',
        city: '',
        gender: '',
        dob: '',
        age: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios('http://localhost:3000/register', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response);
            })
        .catch((error) => {
           alert(error)
          })
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="country">country:</label>
                    <input type="text" name="country" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state">state:</label>
                    <input type="text" name="state" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city">city:</label>
                    <input type="text" name="city" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">gender:</label>
                    <select name="gender" onChange={handleChange}>
                        <option value="">Please select one…</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dob">Date of Birthday:</label>
                    <input type="date" name="dob" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegisterForm;
