import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header>
        <div>
            <h2>{props.text} </h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    text:"Hello Words",
}

Header.propTypes={
    text:PropTypes.string
}
export default Header