/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Label to render on the component
     */
    label?: string;
    /**
     * Size of the label
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Render the text with mayus
     */
    allCaps?: boolean;
    /**
     * Set the font color
     */
    color?: "primary" | "secondary" | "tertiary";
    fontColor?: string;
}
declare function MyLabel({ label, size, allCaps, color, fontColor, }: MyLabelProps): JSX.Element;
export default MyLabel;
