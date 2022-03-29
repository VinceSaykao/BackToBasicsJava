import PropTypes from 'prop-types'


function Name ({title}) {
    return (
        <>
        <p style={nameStyle}>{title}</p>
        </>
    )
} // end of function


Name.propTypes = {
    title: PropTypes.string.isRequired,
}

Name.defaultProps = {
    title: 'Vince Saykao',
}


const nameStyle = {
    color: 'greenyellow',
    webkitTransform: 'rotate(-90deg)',
    letterSpacing: '20px',
    marginLeft: '-1400px',
    marginTop: '-200px',
    zIndex: "1",
}

export default Name