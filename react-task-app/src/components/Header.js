import PropTypes from 'prop-types'
import Button from './Button'


// deconstructed prop
const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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
