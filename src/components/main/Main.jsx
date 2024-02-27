import style from "./main.module.css";
export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.box}>
          <div>
            <img src={"/static/images/1.png"} alt="1.png" className={style.image1} />
          </div>

          <div className={style.section}>
            <p className={style.para1}>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <div className={style.image}>
              <img
                src={"/static/images/2.png"}
                alt="2.png"
                className={style.image2}
              />
            </div>
            <div>
              <p>
                Government of India has awarded the<span className={style.para1}>"National Energy
                Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </p>
            </div>
          </div>
        </div>
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>

        <img className={style.motor} src={"/static/images/3.png"} alt="3.png" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className={style.line}></div>
        <div className={style.lowerpara}>
          <p><span className={style.para1}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span></p>
          <p>
  CHEMICALS <span>|</span> PROCESS POWER WATER <span>|</span> WASTE WATER OILS <span>|</span> GAS PHARMA
  SUGARS <span>|</span> DISTILLERIES PAPER <span>|</span> PULP MARINE <span>|</span> DEFENCE METAL <span>|</span> MINING
  FOOD <span>|</span> BEVERAGE PETROCHEMICAL <span>|</span> REFINERIES SOLAR BUILDING HVAC FIRE
  FIGHTING AGRICULTURE <span>|</span> RESIDENTIAL
</p>

        </div>
      </div>
    </div>
  );
}
