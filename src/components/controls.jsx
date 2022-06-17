import React from "react";
import Clock from "./clock";

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        return (
            <>
                <button  onClick={() => this.setState({ active: !this.state.active })}>{this.state.active ? "on" : "off"}</button>
                {this.state.active ?
                    <Clock /> :
                    <p>Clock off</p>
                }
            </>
        );
    }
}

export default Controls;