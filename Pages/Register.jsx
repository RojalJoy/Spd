import React, { useRef } from 'react';
import { firestore } from "./fire.js";
import { addDoc, collection } from "@firebase/firestore";
import '../CSS/Register.css'; 

export default function Register() {
    const emailRef = useRef(); // Ref for the email input field
    const passwordRef = useRef(); // Ref for the password input field
    const confirmPasswordRef = useRef(); // Ref for the confirm password input field
    const usernameRef = useRef(); // Ref for the username input field
    const firstNameRef = useRef(); // Ref for the first name input field
    const lastNameRef = useRef(); // Ref for the last name input field
    const petNameRef = useRef(); // Ref for the pet's name input field
    const ageRef = useRef(); // Ref for the age input field
    const locationRef = useRef(); // Ref for the location input field
    const petTypeRef = useRef(); // Ref for the pet type input field
    const phoneRef = useRef(); // Ref for the phone number input field

    const customerRef = collection(firestore, "customer"); // Reference to the 'customer' collection

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
            username: usernameRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            petName: petNameRef.current.value,
            age: ageRef.current.value,
            location: locationRef.current.value,
            petType: petTypeRef.current.value,
            phone: phoneRef.current.value
        };
        try {
            await addDoc(customerRef, data); // Add the document to the 'customer' collection
            console.log("Document added successfully!");
        } catch (error) {
            console.error("Error adding document: ", error.message);
        }
    }
    
    return (
        <div className="register-container">
                        <h1>Registration form</h1>
            <form onSubmit={handleSave}>

                <div >
                        <label>First Name: </label>
                        <input type="text" ref={firstNameRef} required /></div>
                <div >
                        <label>Last Name: </label>
                        <input type="text" ref={lastNameRef} required />
                        
                </div>
                <div >
                    <label>Email: </label>
                    <input type="email" ref={emailRef} required /></div>
                <div>
                    <label>Username: </label>
                    <input type="text" ref={usernameRef} required />
                    
                </div>
                <div >
                    <label>Password: </label>
                    <input type="password" ref={passwordRef} required /></div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" ref={confirmPasswordRef} required />
                </div>
                <div >
                    <label>Pet's Name: </label>
                    <input type="text" ref={petNameRef} required /></div>
                <div>
                    <label>Pet Type: </label>
                    <input type="text" ref={petTypeRef} required />
                </div>
                 
                 <div>
                    <label>Age: </label>
                    <input type="number" ref={ageRef} required /></div>
                <div>
                    <label>Phone Number: </label>
                    <input type="tel" ref={phoneRef} required />
                </div>
                <div>
                    <label>Location: </label>
                    <input type="text" ref={locationRef} required />
                </div>
                <div></div>
                <div>
                    <button type='submit'>Submit</button></div>
            </form>
        </div>
    )
}
