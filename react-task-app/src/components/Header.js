import PropTypes from 'prop-types'
import Button from './Button'


// deconstructed prop
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
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
