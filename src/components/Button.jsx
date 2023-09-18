const Button = (props) => {
    return ( 
        <div className="mb-3">
            {props.color=="neutral" && (<button className="btn btn-neutral">{props.children}</button>)}
            {props.color=="primary" && (<button className="btn btn-primary">{props.children}</button>)}
            {props.color=="secondary" && (<button className="btn btn-secondary">{props.children}</button>)}
            {props.color=="accent" && (<button className="btn btn-accent">{props.children}</button>)}
            {props.color=="ghost" && (<button className="btn btn-ghost">{props.children}</button>)}
            {props.color=="link" && (<button className="btn btn-link">{props.children}</button>)}
        </div>
     );
}
 
export default Button;