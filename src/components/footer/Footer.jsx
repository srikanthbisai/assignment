import style from './Footer.module.css';
import { PiPhoneFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
export default function Footer() {

    return(
        <div className={style.footer}>
            <div className={style.container}>
                <div><PiPhoneFill />
                <p className={style.para}>Toll free 1800 200 1234</p></div>
                <div><FaFacebook />
                <p className={style.para}>www.facebook.com/cripumps</p></div>
                <div><CiGlobe />
                <p className={style.para}>www.crigroups.com</p></div>
            </div>
          
        </div>
    )
}

