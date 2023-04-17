import React = require("react");
import styled from "styled-components";

const Label = styled.span({
    fontSize: 24,
    color: "#FFF"
});

const BaseButton = styled.button({
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    border: "none",
    cursor: "pointer",
    pointerEvents: "auto",
    "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.5
    },
    minWidth: 30
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export const Button = React.forwardRef((props: ButtonProps) => {
    const { type = "button", label, ...other } = props;
    return (
        <BaseButton
            { ...other }
            type={type}
            className={props.className}
        >
            {label && <Label>{label}</Label>}
        </BaseButton>
    )
});

export const Text = styled.span({
    fontSize: 24,
    display: "inline",
    color: "#000",
    textAlign: "center"
})

Button.displayName = "Button";