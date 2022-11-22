import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    generateData();
  }, [render]);

  const search = (term) => {
    axios.post('http://localhost:1128/repos', {user: term})
    .then(() => setRender(!render));
  }

  const generateData = () => {
    axios.get('http://localhost:1128/repos')
    .then(({data}) => {
      setRepos(data.sort((a, b) => b.watchers - a.watchers))
    });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));