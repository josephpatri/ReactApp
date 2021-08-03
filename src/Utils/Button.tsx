import { ReactElement } from "react";

export default function Button(props: buttonProps){
    return(
        <button type={props.type} className="btn btn-primary"
        disabled={props.disabled}
        onClick={props.onClick}>{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
}

Button.defaultProps = {
    type: "button",
    disabled: false
}