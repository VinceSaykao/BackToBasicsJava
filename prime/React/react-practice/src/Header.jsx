import PropTypes from 'prop-types'

function Header ({title}) {
    return (
        <header>
        <h1 style={headingStyle}>{title}</h1>
        </header>
    )
} //end of function




Header.defaultProps = {
    title: 'To Do List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


const headingStyle = {
    color: '#fff',
    fontSize: '150px',
    letterSpacing: '50px',
    textShadow: '3px 3px 20px pink',
    position:"absolute",
    marginTop: "-600px",
    marginLeft: "-1000px",
    width: "2000px",
}

export default Header