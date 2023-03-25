import { useState } from "react";

function LoginScreen() {
    const [myName, setMyName] = useState('Muzu');
    const [surname, setSurname] = useState('');

    const onClickChange = () => {
        setMyName('Muzammil')
    }

    const onClickSur = () => {
        setSurname('Memon')
    }
    const onClickRemoveSur = () => {
        setSurname('')
    }

    const onClickNick = () => {
        setMyName('Muxu')
    }

    const onClickReal = () => {
        setMyName('Muzu')
    }

  return (
    <div className="App">
      <h1>My Name is {myName} {surname} </h1>

      <button onClick={onClickChange}>Change Name</button>
      <button onClick={onClickSur}>Add Surname</button>
      <button onClick={onClickRemoveSur}>Remove Surname</button>
      <button onClick={onClickReal}>Remove Real Name</button>
      <button onClick={onClickNick}>Add Nick Name</button>
      <button onClick={onClickReal}>Remove Nick Name</button>

      {/* // add surname
      // remove real name 
      // remove surname 
      // add nick name
      // remove nike name */}
    </div>
  );
}

export default LoginScreen;
