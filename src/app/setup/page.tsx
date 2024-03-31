'use client' 
import React, { useRef } from "react";
import style from './setup.module.scss'
import { Card } from "@/components/card";

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
        <Card />


        <div>Display QR code</div>
    </>
}