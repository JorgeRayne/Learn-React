import ItemList from './ItemList';

const Content = ({items, handelCheck, handelDelete}) => {

  return (
    <main>
      {items.length ? (  
        <ItemList
          items={items}
          handelCheck={handelCheck} 
          handelDelete={handelDelete}
        />
      ) : (
        <p style={{marginTop: '2rem'}}>{'Empty :('}</p>
      )}
    </main>
  );
};


export default Content;
