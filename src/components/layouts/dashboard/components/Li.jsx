const Li = (props) => {
    return (
        <li>
            <a>
                {props.children}
                <h1 className="text-right">{props.name}</h1>
            </a>
        </li>
    );
}

export default Li;