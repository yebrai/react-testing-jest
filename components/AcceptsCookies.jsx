import { useState } from "react"

const AcceptCookies = () => {

    const [cookies, setCookies] = useState(false)

    return (
        <div>
            <label htmlFor="cookieCheckBox">Acepta las cookies</label>
            <input 
            type="checkbox" 
            id="cookieCheckBox"
            onClick={()=> setCookies(!cookies)}
             />
            <article title="confirmación cookies">
                {cookies ? 'Cookies aceptadas' : 'Debes aceptar las cookies'}
            </article>
        </div>
    )

}

export default AcceptCookies