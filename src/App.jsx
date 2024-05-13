import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Users from './components/Users';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div>
      <div> 
        <Search setData={setData} setIsLoading={setIsLoading} />
      </div>
      <div>
        <Users
          avatarUrl={data.avatar_url}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split('T')[0]}
        /> 
      </div>
    </div> 
  )
}

export default App
