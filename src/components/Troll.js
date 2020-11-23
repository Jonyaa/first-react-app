import React from 'react';
import trollface from '../trollface.png';
import './Troll.sass'


class Troll extends React.Component {
    constructor(props) {
        super(props);
        this.selfRef = React.createRef();

        this.state = {visible: false};
    }

    handleClick = () => {
        this.selfRef.current.style.left = "150px";
    }

    handleScroll = e => {
        const wy = window.scrollY;
        const iy = this.selfRef.current.offsetTop - window.innerHeight;
        if (wy > iy + 50) {
            this.setState({visible: true});
        } else {
            this.setState({visible: false});
        }
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <img onClick={this.handleClick} src={trollface} ref={this.selfRef} className={this.state.visible ? "active img" : "img"} />
        )
    }
}

export default Troll;