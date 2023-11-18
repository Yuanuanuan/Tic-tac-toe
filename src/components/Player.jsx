import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEdit((edit) => !edit);
    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEdit)
    editablePlayerName = (
      <input onChange={handleChange} type="text" value={playerName} required />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
