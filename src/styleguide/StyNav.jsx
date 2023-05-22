import { Link } from "react-router-dom";
import IconHome from "./icons/IconHome";
import IconColors from "./icons/IconColors";
import IconFontFamily from "./icons/IconFontFamily";
import IconTypo from "./icons/IconTypo";
import IconButtons from "./icons/IconButtons";
import IconForms from "./icons/IconForms";
import IconGrid from "./icons/IconGrid";


function StyNav() {
    return (
        <>
            <ul className="stynav">
                <li className="stynav__item"><a className="stynav__link" href='#'><IconHome /> Home</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#colors'><IconColors /> Colors</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#font-family'><IconFontFamily /> Font-family</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#typography'><IconTypo /> Typo</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#buttons'><IconButtons /> Buttons</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#form'><IconForms /> Form assets</a></li>
                <li className="stynav__item"><a className="stynav__link" href='#grid'><IconGrid /> Grid</a></li>
            </ul>
        </>
    );
}

export default StyNav