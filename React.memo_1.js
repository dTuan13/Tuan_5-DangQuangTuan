import React, { memo } from "react";

const MyComponent = memo(({ name, age }) => {
  console.log("Render MyComponent");
  return (
    <div>
      <h2><span class="ez-toc-section" id="Name_name"></span>Name: {name}<span class="ez-toc-section-end"></span></h2>
      <h3><span class="ez-toc-section" id="Age_age"></span>Age: {age}<span class="ez-toc-section-end"></span></h3>
    </div>
  );
});

export default function App() {
  const [person, setPerson] = React.useState({ name: "John", age: 30 });

  const handleClick = () => {
    setPerson({ name: "Mike", age: 25 });
  };

  return (
    <div>
      <MyComponent name={person.name} age={person.age} />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}