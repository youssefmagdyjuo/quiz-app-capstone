
export default function SearchBar({searchFor,setSearchFor}) {
    function handleChange(e){
        setSearchFor(e.target.value.trim())
    }
    function handleSearch(){
        // styling 
        document.querySelector('.inputSearch').classList.toggle('display')
        document.querySelector('.buttonSearch').classList.toggle('changeButtonSearchStyle')
    }
    return (
        <div className='searchContainer '>
        <input 
        placeholder="Search by category"
        className='inputSearch'
        type="text" 
        value={searchFor}
        onChange={handleChange}
        />
        <button 
        className='buttonSearch'
        onClick={handleSearch}
        >
            <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}
