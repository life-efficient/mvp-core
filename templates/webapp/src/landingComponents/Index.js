import React, { Component } from "react"
import "./Index.css"
import { connect } from "react-redux"

class Home extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Hero />
                <div className="index-section">
                    Yo
                </div>
            </>
        )
    }
}

const Hero = () => {
    return (
            <div className="hero-image">
                <div className="hero-text">
                    <div className="title-text">{window.title}</div>
                    <p className="subtitle-text"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
    )
}


const mapStateToProps = (state) => {
    return {
        logged_in: state.user.logged_in
    }
}

export default Home = connect(mapStateToProps)(Home)