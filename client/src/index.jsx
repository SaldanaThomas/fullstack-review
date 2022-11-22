import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  //POST github username to database, search github api
  const search = (term) => {
    $.post('http://localhost:1128/repos', term);
    console.log(`${term} was searched`);
  }

  const generateData = () => {
    $.get('http://localhost:1128/repos', (data, status) => {
      console.log('DATA RETURNED');
      //update repos state
    });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));