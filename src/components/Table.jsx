export const Row = (props) => {
    return (
        <tr>
            {props.children}
        </tr>
    )
}

export const Col = (props) => {
    return (
        <td>
            {props.children}
        </td>
    )
}

export const Thead = (props) => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

export const Tbody = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

const Table = (props) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {props.children}
                </table>
            </div>
        </>
    );
}

export default Table;