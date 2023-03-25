import { useState } from "react";
function CounterScreen() {
  const [count, setcount] = useState(0);
  const [searchNumber, setSearchNumber] = useState(0);
  const [createButton, setCreateButton] = useState(false);

  const onClickFun = (value) => {
    if (value === "add") {
      setcount(count + 1);
    } else if (value === "sub") {
      setcount(count - 1);
    } else if (value === "reset") {
      setcount(0);
    } else if (value === "even") {
      setcount(count + 2);
    } else if (value === "odd") {
      setcount(count + 2 - 1);
    } else if (value === "+5") {
      setcount(count + 5);
    } else if (value === "+11") {
      setcount(count + 11);
    }
  };

  const createButtonTemp = (value) => {
    setCreateButton(true);
  }

  return (
    <div className="App">
      <h1>+++ Welcome To Counter +++</h1>
      <h1>{count}</h1>
      <button onClick={() => onClickFun("add")} style={{ marginRight: 20 }}>
        Increament
      </button>
      <button onClick={() => onClickFun("sub")} style={{ marginRight: 20 }}>
        Decreament
      </button>
      <button onClick={() => onClickFun("reset")}>Reset</button>
      <br></br>
      <button
        onClick={() => onClickFun("even")}
        style={{ marginRight: 20, marginTop: 10 }}
      >
        Even Number
      </button>
      <button onClick={() => onClickFun("odd")} style={{ marginRight: 20 }}>
        Odd Number
      </button>
      <button onClick={() => onClickFun("+5")} style={{ marginRight: 20 }}>
        Add 5
      </button>
      <button onClick={() => onClickFun("+11")}>Add 11</button>

      { createButton? <button onClick={() => setcount(count + searchNumber)}>Add {searchNumber}</button> : null }

      <form style={{ marginTop: 40 }}>
        <label> Enter Custom Number to Create Buttons </label>
        <br></br>
        <input type="number" value={searchNumber} onChange={(e) => setSearchNumber(e.target.value)} />
        <input type="submit" value="Submit" onClick={() => createButtonTemp(searchNumber)} />
      </form>
    </div>
  );
}
export default CounterScreen;
