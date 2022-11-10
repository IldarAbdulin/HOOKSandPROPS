import './App.css';
import State from './hooks/useState';
import Effect from './hooks/useEffect';
import List from './components/List';
import WorkingWithProps from './components/WorkingWithProps';
import firstImage from './img/1.svg'

import { useState } from 'react';

function App() {

  const items = [
    {
      image: firstImage,
      title: 'Кроссовок Nike',
      price: 10000
    },
    {
      image: firstImage,
      title: 'Кроссовок Puma',
      price: 5600
    },
    {
      image: firstImage,
      title: 'Кроссовок Puma',
      price: 5600
    },
  ]

  const [visibleList, setVisibleList] = useState(true)

  const toggleVisibleList = () => {
    setVisibleList(visible => !visible)
  }

  return (
    <div className="App">
      {/* <State /> */}
      {/* <Effect /> */}
      {/* {visibleList && <List />}*/}
      {/* <button onClick={toggleVisibleList}>{!visibleList ? 'Return' : 'Delete'} all numbers</button> */}
      {/* <br />
      <br />
      <br /> */}

      <div className='item'>
      {
        items.map((item) => (
          <div className='item'>
              <WorkingWithProps 
                image={item.image} 
                title={item.title}
                price={item.price}
              />
          </div>
        ))
      }
      </div>

    </div>
  );
}
export default App;