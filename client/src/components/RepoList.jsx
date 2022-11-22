import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({repos}) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {repos.length} repos.
      <div>
        {repos.length ?
        repos.map((repo, index) => <Repo repo={repo} key={index}/>)
        : <div>NOTHING</div>}
      </div>
    </div>
  )
};

export default RepoList;