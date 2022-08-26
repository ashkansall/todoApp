

const Search = ({ searchValue, setSearchValue, }) => {


    const searchHandler = (e) => {
        setSearchValue(e.target.value.trim().toLowerCase());
    }

    return ( 
        <div className="searchBar">
            <input 
            type="text" 
            value={searchValue} 
            onChange={searchHandler}
            placeholder="Search..." 
            />
        </div>
     );
}
 
export default Search;