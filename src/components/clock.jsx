import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

        };
    }

    render() {
        return (
            <div>
                <h2>Hello, World!</h2>
                <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){
        console.log('componetDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick() {
        console.log('tick');
        this.setState({
            date: new Date(),
        });
    }
}

 export default Clock;