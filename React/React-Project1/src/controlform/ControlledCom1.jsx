import { useState } from "react";
import React from "react";

const ControlledCom1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Controlled Component</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormData}
          placeholder="Enter name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          placeholder="Enter email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledCom1;



//Controlled Form is a form where form data is handled by a React component. In a controlled form, the input elements' values are controlled by the component's state, allowing for real-time validation, dynamic updates, and easier management of form data.and any change in the input is handled by the event handler like onchange.
//an uncontrolled form is a form where form data is handled by the DOM itself. In an uncontrolled form, the input elements maintain their own state/data using the browser's DOM, and React does not directly manage the values of the inputs. Instead, you typically use refs to access the input values when needed.React can access the value only when required using a hook which is useRef.
//UseRef is a hook that allows you to create a mutable reference that persists across renders. It can be used to access DOM elements directly or to store mutable values that do not trigger re-renders when changed.It returns an object.
