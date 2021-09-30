import { useState } from "react";

import { nanoid } from "nanoid";

import Form from "./components/Form/Form.jsx";

const getRandom = Math.floor(Math.random() * 3) + 1;

let colorArray = [];

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    colorArray.push({ color: "blue", id: nanoid(), checked: false });
  }
  for (let i = 0; colorArray.length < 6; i++) {
    colorArray.push({ color: "green", id: nanoid(), checked: false });
  }
  return colorArray;
};
createBoxes(getRandom);

function App() {
  const [colors, setColors] = useState(colorArray);

  const blueColorArray = colorArray.filter((item) => item.color === "blue");

  const getCheckedBlue = () => {
    return blueColorArray.some((item) => item.checked === false);
  };

  const handleChange = (event) => {
    const chackedColors = colors.map((item) => {
      if (item.id === event.target.id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setColors(chackedColors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!getCheckedBlue()) {
      return alert("Все синие квадраты выбраны");
    }
    return alert("Не все синие квадраты выбраны");
  };

  return (
    <div className="App">
      <h1>Пожалуйста, выберите все синие квадраты</h1>
      <Form
        handleSubmit={handleSubmit}
        colorArray={colors}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
