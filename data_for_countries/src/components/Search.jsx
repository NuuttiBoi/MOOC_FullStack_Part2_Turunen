const Search = (props) => {
    return (
        <div>
            <form>
                <div>
                    Find countries <input
                    value={props.filter}
                    onChange={props.changeFilter}
                />
                </div>
            </form>
        </div>
        )
}
export default Search