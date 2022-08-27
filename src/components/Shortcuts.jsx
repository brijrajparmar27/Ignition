import "./shortcuts.css";
import docs from "../assets/icons/docs.svg";
import gmail from "../assets/icons/gmail.svg";
import drive from "../assets/icons/drive.svg";
import sheets from "../assets/icons/sheets.svg";
import github from "../assets/icons/github.svg";

const Shortcuts = () => {
    const items = [
        {
            logo: gmail,
            name: "Gmail",
            url: "https://mail.google.com/mail/?tab=mm&authuser=0"
        },
        {
            logo: drive,
            name: "Drive",
            url: "https://drive.google.com/?ogsrc=32&tab=mo&authuser=0"
        },
        {
            logo: sheets,
            name: "Sheets",
            url: "https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0"
        },
        {
            logo: github,
            name: "Github",
            url: "https://github.com/"
        },
        {
            logo: docs,
            name: "Docs",
            url: "https://docs.google.com/document/?usp=docs_alc&authuser=0"
        },
    ]
    return (
        <div className="shortcuts_contain">
            {items.map((item) => {
                return <div className="card_outer">
                    <a href={item.url}>
                        <div className="card">
                            <img src={item.logo} />
                        </div>
                        <p className="shortcut_title">
                            {item.name}
                        </p>
                    </a>
                </div>
            })}
        </div>
    );
}
export default Shortcuts;