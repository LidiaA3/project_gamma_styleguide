import { Link } from "react-router-dom";
import IconHome from "../components/icons/IconHome";
import IconColors from "../components/icons/IconColors";
import IconFontFamily from "../components/icons/IconFontFamily";
import IconTypo from "../components/icons/IconTypo";
import IconButtons from "../components/icons/IconButtons";
import IconForms from "../components/icons/IconForms";
import IconGrid from "../components/icons/IconGrid";

function StyNav() {
    return (
        <>
            <ul className="stynav">
                <li className="stynav__item"><Link className="stynav__link" to='#'><IconHome /> Home</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#colors'><IconColors /> Colors</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#font-family'><IconFontFamily /> Font-family</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#typography'><IconTypo /> Typo</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#buttons'><IconButtons /> Buttons</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#form'><IconForms /> Form assets</Link></li>
                <li className="stynav__item"><Link className="stynav__link" to='#grid'><IconGrid /> Grid</Link></li>
            </ul>
        </>
    );
}

export default StyNav