import { useEffect, useState } from "react";


function Search({ setData, setIsLoading }) {
    const [userName, setUserName] = useState("");
    const [repos, setRepos] = useState();

    const handleClick = async () => {
        setIsLoading(true);
        const data = await fetch(`https://api.github.com/users/${userName}`);
        const userData = await data.json();
        setData(userData);
        setIsLoading(false);
        console.log(userData);
    }

    const listRepos = () => {
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res => res.json())
        .then(repos => setRepos(repos))
        .catch(err => console.log(err))
      }
    console.log(repos);

    useEffect(() => {
        handleClick();
    }, [])

    useEffect(() => {
        listRepos();
    }, [])

    return (
        <div className="search">
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Search Github Username..." />
            </div>
            <div>
                <button onClick={handleClick}>Search User</button>
                <button onClick={listRepos}>Repos List</button>
            </div>
        </div>
    );
}


export default Search;