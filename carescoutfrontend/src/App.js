import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProviderResults from './compoents/ProviderResults';
import SearchForm from './compoents/SearchForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" element={<SearchForm/>}/>
      <Route exact path="/results" element={<ProviderResults/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
