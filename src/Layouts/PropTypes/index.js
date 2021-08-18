import PropTypes from 'prop-types'

function PropTypesComponent({ name, age, renderable }) {
  return `In 5 year ${name} will be ${age + 5}`
  // return renderable
  // return null
}

PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  // renderable: PropTypes.node //node or element is arr,obj,string,component ... sth

  stringOrNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), // just only recive string or number => using oneOfType

  enum: PropTypes.oneOf(
    ['loading', 'ready']
  ) // onOf is like using for enum, it's mean using for data has been created
  ,
  // arrayOf: PropTypes.arrayOf(PropTypes.number) // array is any array, arrayOf is define the type of array
  arrayOfPlus: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['5', '6'])
  ])),
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }), // shape just like object but if add more key of component, it's still okey
  personExact: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number
  }).isRequired// no extend, exact is exact
}

export default PropTypesComponent
