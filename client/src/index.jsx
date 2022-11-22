import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   generateData();
  // }, [repos]);

  const search = (term) => {
    $.post('http://localhost:1128/repos', term, () => {
      generateData();
    });
  }

  const generateData = () => {
    $.get('http://localhost:1128/repos', (data, status) => {
      setRepos(data);
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