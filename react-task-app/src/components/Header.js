import PropTypes from 'prop-types'


// deconstructed prop
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// default prop if not provided for component
Header.defaultProps = {
    title: 'Task App'
}

// proptype
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }
  

export default Header
