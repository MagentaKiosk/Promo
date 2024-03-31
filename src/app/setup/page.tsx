'use client' 
import React, { useRef } from "react";
import style from './setup.module.scss'

//  --------
export default function Setup() {
    const [ photo, setPhoto ] = React.useState<string | undefined>(undefined)
    
    const handle = {
        submit(e: any) {
            e.preventDefault()

            console.log(e)
            //  convert image to base64
            //  format everything into VCARD
        }
    }



    return <>
        <form className={style.container} onSubmit={(e) => handle.submit(e)}>
            <div className={style.image}>
                <label htmlFor="file" className={style.label}>
                    <img src={photo && photo} />
                </label>
                <input id="file" type="file" onChange={(e) => {
                    setPhoto(e.target.value)
                    console.log(photo)
                }}/>
            </div>
            
            <div>
                <input className={style.name} type="text" placeholder="First Name" />
                <input type="text" placeholder="Title" />
                <input type="tel" 
                    placeholder="Phone number" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    minLength={10}
                    maxLength={10}
                />
            </div>
        </form>


        <div>Display QR code</div>
    </>
}