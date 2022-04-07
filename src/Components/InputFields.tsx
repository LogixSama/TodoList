import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}

const InputFields: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input type="input"
      value={todo}
      onChange={
          (e)=>setTodo(e.target.value)
      }
      placeholder="Enter a Task" 
      className="input__box" />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
