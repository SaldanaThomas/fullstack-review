import React from 'react';

const Repo = ({repo}) => {
  return (
    <div>
      <div>{repo.username}</div>
      <div>{repo.repoURL}</div>
      <div>{repo.watchers}</div>
    </div>
  );
}

export default Repo;