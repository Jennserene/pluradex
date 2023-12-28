import styles from "./global.module.css"
import cn from "classnames";

type Props = {
    customButtonStyle?: string;
    customTextStyle?: string;
    text: string;
    onClick: () => void;
}

export default function CustomButton(props: Props){
    const customButtonStyle = props.customButtonStyle ? props.customButtonStyle : "genericButton";
    const customTextStyle = props.customTextStyle ? props.customTextStyle : "genericButtonText";
    const text = props.text;
    const action = props.onClick;

    return (
        <button onClick={action} className={cn(styles.stdButton, styles[customButtonStyle])}>
            <span className={cn(styles.stdButtonText, styles[customTextStyle])}>
                {text}
            </span>
        </button>
    )
}