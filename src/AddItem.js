import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSumit }) => {

  const inputRef = useRef();

  return (
    <form action="" className="addForm" onSubmit={handleSumit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        required
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
