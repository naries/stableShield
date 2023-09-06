import "./Backdrop.css";

const Backdrop = ({ show, click }: any) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
