import Content from './Content';
import SearchItem from './SearchItem';
import Header from './Header';
import AddItem from './AddItem';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try{
  //       const response = await fetch(API_URl);
  //       if(!response.ok) throw Error('Error');
  //       const listItems = await response.json();
  //       setItem(listItems)
  //       setFetchError(null)
  //     }catch(err){
  //       setFetchError(err.message)
  //     }finally{
  //       setIsLoading(false)
  //     }
  //   }

  //   setTimeout(() => fetchItems(), 10000);
  // }, [])


    useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItem(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [])


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const myNewItem = {id, checked : false, item}
    const listItems = [...items, myNewItem];
    
    setItem(listItems);
  }

  const handelCheck = (id) => {
     const listItems = items.map((item) => item.id === id ? {...item,
      checked: !item.checked
     } : item)
    setItem(listItems);
  }

  const handelDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItem(listItems);
  }

  const handleSumit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title= "Grocery List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSumit={handleSumit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items....</p>}
        {fetchError &&  !isLoading && <p style={{color: "red"}}>{`Error ${fetchError}`}</p>}
        {!fetchError && 
          <Content 
          items= {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handelCheck = {handelCheck}
          handelDelete ={handelDelete}
        />}
      </main>
      <Footer  length={items.length}/>
    </div>
  );
}

export default App;