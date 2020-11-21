import React from 'react'
import { Button } from './Button'
import "./Form.css"

function Form() {
    return (
        <div className="form-container" id="subscribe">
            <div className="section-container">
                    <div className="text-form-container">
                    
                        <h3>Subscribe </h3>
                        <p> Sign up to receive our daily healthy advice. </p>
                    </div>

                <div className="input-form-container">
                    <input placeholder="Name" className="form-input"></input>
                    <input placeholder="Email" className="form-input"></input>
                </div>

                <div className="button-form-container">
                    <Button className="btns"
                            buttonStyle="btn--outline"
                            buttonSize="btn--large">
                        SUBSCRIBE
                    </Button>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Form
