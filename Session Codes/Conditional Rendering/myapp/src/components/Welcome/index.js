const Welcome = (props) => {
  const { firstName, lastName } = props
  return (
    <h3>Welcome {firstName} {lastName}</h3>
  )
}

Welcome.defaultProps = {
  firstName: 'Preethi',
  lastName : 'Neela'
}

export default Welcome