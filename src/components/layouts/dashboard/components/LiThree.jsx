const LiThree = (props) => {
    return (
        <li>
            <details>
                <summary>
                    {props.children}

                    <h1 className="text-right">{props.name}</h1>
                </summary>
                <ul className="bg-base-200 p-1 rounded-lg">
                    {props.links.map(link => (
                        link
                    ))}
                </ul>
            </details>
        </li>
    );
}

export default LiThree;