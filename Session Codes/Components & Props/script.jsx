const rootElement = document.getElementById( "root" );


// Creating a component
const Welcome = () => <h1 className="greeting">Welcome</h1>

ReactDOM.render(
  <Welcome />,
  rootElement
)

// Passing Props to a component

const FullName = (props) => {
  const { firstName, lastName } = props;
  return (
    <h1 className="greetings">{firstName} {lastName}</h1>
  );
}

ReactDOM.render(<FullName firstName="Rajesh" lastName="Patnala" />, rootElement);

// Code Reusable

const FullNames = (props) => {
  const { firstName, lastName } = props;
  return (
    <h1 className="greetings">{firstName} {lastName}</h1>
  )
}

const Names = () => (
  <div>
    <FullNames firstName="Rajesh" lastName="Patnala" />
    <FullNames firstName="Preethi" lastName="Tingari" />
  </div>
)
ReactDOM.render(<Names />, rootElement);
