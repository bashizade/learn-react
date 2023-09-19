const Button = (props) => {
    return ( 
        <div className="mb-3">
            {props.color=="neutral" && (<button type={props.type} className="btn btn-neutral" onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="primary" && (<button type={props.type} className="btn btn-primary" onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="secondary" && (<button type={props.type} className="btn btn-secondary" onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="accent" && (<button type={props.type} className="btn btn-accent" onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="ghost" && (<button type={props.type} className="btn btn-ghost" onSubmit={props.onSubmit}>{props.children}</button>)}
            {props.color=="link" && (<button type={props.type} className="btn btn-link" onSubmit={props.onSubmit}>{props.children}</button>)}
        </div>
     );
}
 
export default Button;