import React, { Component } from "react"

import { connect } from "react-redux"
/** @jsx jsx */
import { jsx } from "@emotion/core"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        window.analytics.page('home')
    }

    render() {return(
        <div>yo</div>
    )}
}

const mapDispatchToProps = (dispatch) => {return{
    openModal: (content) => {
        dispatch({
            type: "OPEN_MODAL",
            content
        })
    }
}}

export default Home = connect(null, mapDispatchToProps)(Home)