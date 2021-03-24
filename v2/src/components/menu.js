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

  componentDidUpdate = () => {
    if (this.state.open === true) {
      document.addEventListener("keydown", this.keepModalActive)
    } else {
      document.removeEventListener("keydown", this.keepModalActive, true)
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.keepModalActive, true)
  }

  onClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
    this.toggleNonModalElementAria()
  }

  keepModalActive = e => {
    const lastFocusableElement = document.querySelector(".menu-links")
      ?.lastElementChild
    const firstFocusableElement = document.querySelector(".menu-button")
    let isTabPressed = e.key === "Tab" || e.keyCode === 9
    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus() // add focus for the last focusable element
        e.preventDefault()
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus() // add focus for the first focusable element
        e.preventDefault()
      }
    }
  }

  onKeyUp = e => {
    if (e.key === "Escape" || e.key === "Enter") {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }
  }

  toggleNonModalElementAria = () => {
    // Get all elements outside the modal and open/close button
    const elementsToToggleAria = document.querySelectorAll(
      ".container > *:not(header)"
    )
    elementsToToggleAria.forEach(element => {
      if (element.hasAttribute("aria-hidden")) {
        element.removeAttribute("aria-hidden")
      } else {
        element.setAttribute("aria-hidden", "true")
      }
    })
  }

  onClickNav = () => {
    this.setState({
      open: false,
    })
  }

  render = () => {
    return (
      <>
        <div className="menu-container">
          <button
            className={`hamburger hamburger--slider menu-button ${
              this.state.open ? "is-active" : ""
            }`}
            onClick={this.onClick}
            type="button"
            aria-label={this.state.open ? "Close menu" : "Open menu"}
            aria-controls="navigation"
            aria-expanded={this.state.open}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <Nav
          id="navigation"
          hidden={this.state.open ? "open" : "closed"}
          onclick={this.onClickNav}
          onkey={this.onKeyUp}
        />
      </>
    )
  }
}

export default Menu
