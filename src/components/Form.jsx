export const CheckboxInput = (props) => {
    return (
        <input type="checkbox" name={props.name} checked={props.checked} className="checkbox" />
    )
}

export const FileInput = (props) => {
    return (
        <input type="file" name={props.name} className="file-input file-input-bordered w-full max-w-xs" />
    )
}

export const SelectInput = (props) => {
    return (
        <select name={props.name} className="select select-bordered w-full max-w-xs">
            <option value=""></option>
            {props.children}
        </select>
    )
}

export const TextInput = (props) => {
    return (
        <input type="text" name={props.name} value={props.value} placeholder={props.placeholder} className="input input-bordered w-full max-w-xs" />
    )
}

export const TextareaInput = (props) => {
    return (
        <textarea name={props.name} className="textarea textarea-bordered" placeholder={props.placeholder}>{props.value}</textarea>
    )
}

export const ToggleInput = (props) => {
    return (
        <input type="checkbox" className="toggle" checked={props.checked} />
    )
}