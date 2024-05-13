import { useEffect, useState } from "react";


function Search({ setData, setIsLoading }) {
    const [userName, setUserName] = useState("");
    const handleClick = async () => {
        setIsLoading(true);
        const data = await fetch(`https://api.github.com/users/${userName}`);
        const userData = await data.json();
        setData(userData);
        setIsLoading(false);
        console.log(userData);
    }

    useEffect(() => {
        handleClick();
    }, [])
    return (
        <div className="search">
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Search Github Username..." />
            </div>
            <div>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    );
}


export default Search;