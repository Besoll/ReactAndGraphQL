const NavButtons = ({start, end, next, previous, onPage}) => {
    return (
        <div className="d-flex justify-content-center my-2">
        
        {previous && (
            <button className="d-flex mx-1 btn-sm btn-primary bi bi-arrow-bar-left" 
            onClick={() => onPage("last", 'before: "' + start + '"')}></button>
        )}

        {next && (
            <button className="d-flex mx-1 btn-sm btn-primary bi bi-arrow-bar-right" 
            onClick={() => onPage("first", 'after: "' + end + '"')}></button>
        )}
        </div>
    )
};

export default NavButtons;