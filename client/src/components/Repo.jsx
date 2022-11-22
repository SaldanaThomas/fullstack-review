import React from 'react';

const Repo = ({repo}) => {
  return (
    <div>
        <div>GITHUB USER: {repo.username}</div>
        <div>REPOSITORY: {<a href={repo.repoURL}>{repo.repoURL}</a>}</div>
        <div>WATCHERS: {repo.watchers}</div>
    </div>
  );
}

export default Repo;