import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
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

  const handelDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id)

    setItem(listItem);
    localStorage.setItem('shoppinglist', JSON.stringify(listItem));
  }

  return (
    <div className="App">
      <Header title= "Grocery List"/>
      <Content 
        items= {items}
        handelCheck = {handelCheck}
        handelDelete ={handelDelete}
        />    
      <Footer  length={items.length}/>
    </div>
  );
}

export default App;