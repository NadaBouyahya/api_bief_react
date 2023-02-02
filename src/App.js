import SearchComponent from './components/layouts/SearchComponent';
import Show from './components/Show';
import { useState } from 'react';


function App() {
  const [searhData, setSearched] = useState(false);
  const [univData, SetData] = useState([]);
  return (
    <div className="App">
      <SearchComponent searhData={searhData}/>
      <Show/>
    </div>
  );
}

export default App;
