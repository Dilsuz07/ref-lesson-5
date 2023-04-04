import React from "react";
import { Component } from "react"

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef()
        this.cardRef = React.createRef()
    }

    handleClick = (e) => {
        e.preventDefault()
        if(this.cardRef.current.value.length < 16) {
            alert('Invalid card number')
        }
        return
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value }, () => {
    //         if (this.state.card.length === 16) {
    //             this.cvRef.current.focus();
    //         }
    //         if (this.state.cv.length === 3) {
    //             this.nameRef.current.focus();
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input
                        type='text'
                        name='card'
                        placeholder="VISA"
                        // value={this.card}
                        ref={this.cardRef}
                    /><br />
                    <input
                        type='text'
                        name='name'
                        placeholder="name"
                        // value={this.name}
                        // onChange={this.handleChange}
                        ref={this.firstNameRef}
                    /><br />
                    <button>send</button>

                </form>
            </div>
        )
    }

}