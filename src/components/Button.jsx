const Button = (props) => {
    return ( 
        <div className="mb-3">
            {props.color=="neutral" && (<button type={props.type} className="btn btn-neutral" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="primary" && (<button type={props.type} className="btn btn-primary" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="secondary" && (<button type={props.type} className="btn btn-secondary" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="accent" && (<button type={props.type} className="btn btn-accent" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="ghost" && (<button type={props.type} className="btn btn-ghost" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="link" && (<button type={props.type} className="btn btn-link" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="red" && (<button type={props.type} className="btn bg-red-600 text-white hover:bg-red-700" onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>)}
        </div>
     );
}
 
export default Button;