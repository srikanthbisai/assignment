import style from "./header.module.css"

export default function Header() {

    return(
        <>
        <div className={style.header}>
            <div className={style.container}>
                <img src="src/assets/logo.png" alt="" />
            </div>
        </div>
        </>
    )

}