import VersaceLogo from "../assets/versace-logo.svg";
import ZaraLogo from "../assets/zara-logo.svg";
import GucciLogo from "../assets/gucci-logo.svg";
import PradaLogo from "../assets/prada-logo.svg";
import CalvinKleninLogo from "../assets/calvin-klein.svg";

const BrandSlider = () => {
  return (
    <div className="relative h-24 overflow-x-hidden bg-black">
      <img className="slide slide1" src={VersaceLogo} alt="" />
      <img className="slide slide2" src={ZaraLogo} alt="" />
      <img className="slide slide3" src={GucciLogo} alt="" />
      <img className="slide slide4" src={PradaLogo} alt="" />
      <img className="slide slide5" src={CalvinKleninLogo} alt="" />
    </div>
  );
};

export default BrandSlider;
