import React from "react"
import { Navbar } from "mvp-webapp"
import { connect } from "react-redux"

const AppRoutes = (props) => {
    return (
        <>
            <Navbar btn='Menu' action={props.openMenu} home='/app'/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => dispatch({
            type: 'TOGGLE_MENU'
        })
    }
}

export default connect(null, mapDispatchToProps)(AppRoutes)