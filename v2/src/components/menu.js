import React from "react"
import Nav from "./nav"
import "../styles/menu.scss"
import "../styles/hamburger.css"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  onClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  onKeyUp = e => {
    if (e.key === "Escape" || e.key === "Enter") {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
  }

  onClickNav = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <>
        <div className="menu-container">
          <button
            className={`hamburger hamburger--slider menu-button ${
              this.state.open ? "is-active" : ""
            }`}
            onClick={this.onClick}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded={this.state.open}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <Nav
          hidden={this.state.open ? "open" : "closed"}
          onclick={this.onClickNav}
          onkey={this.onKeyUp}
        />
      </>
    )
  }
}

export default Menu
