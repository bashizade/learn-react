const Li = (props) => {
    return (
        <li>
            <div>
                {props.children}
                <h1 className="text-right">{props.name}</h1>
            </div>
        </li>
    );
}

export default Li;