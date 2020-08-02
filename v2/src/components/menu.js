import React from 'react'
import Nav from './nav'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    onClick = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

    render() {
        return (
            <>
                <button onClick={this.onClick}>Menu</button>
                <Nav hidden={this.state.open ? '' : 'hide'} />
            </>
        )
    }
}

export default Menu