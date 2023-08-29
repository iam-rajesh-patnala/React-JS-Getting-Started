const rootElement = document.getElementById("root");
const name = "Rajesh";
const className = "greetings"
// Using Expression 
const fullName = user => user.firstName + " " + user.lastName;
const user = { firstName: "Rajesh", lastName: "Patnala" };
const element = (
  <div>
    <h1 className={className}>{fullName(user)}</h1>
    <p className="paragraph">Good to see you here</p>
  </div>
);
ReactDOM.render(element, rootElement);

console.log(fullName(user));