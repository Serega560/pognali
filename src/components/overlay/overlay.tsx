import "./overlay.scss";


type OverLayProps = {
    handleButtonClick: () => void;
    toggleMenu: () => void;
}

function Overlay({handleButtonClick, toggleMenu}: OverLayProps): React.JSX.Element {
    return (
        <div className="overlay" onClick={() => {handleButtonClick(); toggleMenu();}}></div>
    )
}

export default Overlay;