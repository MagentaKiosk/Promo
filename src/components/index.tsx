'use client'
import React from "react"
import style from './contactme.module.scss'

import { useSearchParams } from 'next/navigation'


export const ContactMe = () => {
    const [ active, setActive ] = React.useState<Boolean>(false)
    const params = useSearchParams()

    React.useEffect(() => {
        console.log(active)
        console.log(params.get("photo"))
    }, [active])

    return <div className={style.container}>
        {/* Avatar */}
        { active && <div className={style.menu}>
            <button onClick={(e) => {
                //  window.location.href = "messages://"
                window.open(`sms://${params.get("phone")}`)
            }}>
                <div className={style.icon} />
                <p>Send me a text</p>
            </button>
            <button onClick={(e) => {
                //  window.location.href = "messages://"
                const data = `BEGIN:VCARD\nVERSION:3.0\nPHOTO;ENCODING=b,TYPE=JPEG:${params.get("photo")}\nFN:${params.get("name")}\nTEL;TYPE=CELL:${params.get("phone")}\nEND:VCARD`
                const url = window.URL.createObjectURL(new Blob([data], { type: 'text/vcard' }))

                let a = document.createElement("a")
                a.href = url
                a.download = `${params.get("name")}.vcf`
                document.body.appendChild(a)

                a.click()
                
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)

                console.log(data)
                console.log(url)
            }}>
                <div className={style.icon} />
                <p>Download contact</p>
            </button>
        </div>}
        <img className={style.avatar}
            src={`data:image/webp;base64,${params.get("photo") ? 
                params.get("photo") 
                : "PHN2ZyB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUyLjAwMDAwMSA1Mi4wMDAwMDEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjZTIwMDc0IiBkPSJNMCAwaDUydjUySDB6Ii8+CiAgPHBhdGggZD0iTTE3LjgzMTIgMzEuOTQxNTVoLTcuNDI4NTh2LTcuNDI4NTdoNy40MTU0N3Y3LjQyODU3ek0xMC40MDI2MSA3LjQyODU3djEyLjYyOTg4aDIuMjI3MjZ2LS4zNjY4NGMwLTUuOTQ4MSAzLjM0MDktOS42NTU4MyA5LjY1NTgzLTkuNjU1ODNoLjM2Njg1VjM2Ljc3NmMwIDMuNzA3NzQtMS40ODA0OCA1LjIwMTMxLTUuMjAxMzEgNS4yMDEzMWgtMS4xMTM2M3YyLjU5NDFoMTkuMzExNjZ2LTIuNTk0MWgtMS4xMTM2M2MtMy43MDc3MyAwLTUuMjAxMy0xLjQ4MDQ3LTUuMjAxMy01LjIwMTNWMTAuMDIyNjdoLjM2NjgzYzYuMzE0OTUgMCA5LjY1NTg0IDMuNzA3NzMgOS42NTU4NCA5LjY1NTgzdi4zNjY4NGgyLjIyNzI2VjcuNDI4NTdabTIzLjc2NjE5IDI0LjUxMjk4aDcuNDI4NTd2LTcuNDI4NTdoLTcuNDE1NDd2Ny40Mjg1N3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+"
            }`} 
            onClick={(e) => {
                console.log(e)
            setActive(!active)
        }} />
        {/* Menu */}
    </div>
}