import {useState } from "react";
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      item: 'qwerqwer'
    },
    {
      id: 2,
      checked: false,
      item: "tyuityiu"
    },
    {
      id: 3,
      checked: false,
      item: "asdfasdf"
    }
  ]);

  const handelCheck = (id) => {
     const listItems = items.map((item) => item.id === id ? {...item,
      checked: !item.checked
     } : item)

     setItem(listItems);

     localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox" 
              onChange={() => {
                handelCheck(item.id)
              }}
              checked={item.checked}/>
            <label onDoubleClick={() => handelCheck(item.id)}
            >{item.item}</label>
           <FaTrashAlt 
            role="button"
            tabIndex='0'
           />
          </li>
        ))}
      </ul>
    </main>
  );
};


export default Content;
