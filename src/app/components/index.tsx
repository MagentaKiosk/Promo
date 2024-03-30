'use client'
import React from "react"
import style from './contactme.module.scss'

import { useSearchParams } from 'next/navigation'


export const ContactMe = () => {
    const [ active, setActive ] = React.useState<Boolean>(false)
    const params = useSearchParams()

    React.useEffect(() => {
        console.log(active)
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
                const data = `BEGIN:VCARD\nVERSION:3.0\nPHOTO;ENCODING=b,TYPE=JPEG:iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEXiAHT////gAGf87PPgAGrgAGb/+v3iAHHjGHrnUpD//P7hAG/hAGzsgKvqbqHoYJj65Oz41OPvlbnwnr72xNfzr8n63ejpZ53xpcP2xtn86/LmPojnTY/nV5LujLL+9Pn3zd30vNHth6/fAGDseqfztMzkJX7lM4PmQ4rqbaFnGP+9AAAEHElEQVR4nO3de0OqMBjH8UHDWSzvF7TjtczO+3+Dx8vJsHB7gLGL/b5/R/gJHAg2GEMIIYQQQgghhBBCCCGEEEIINVHsRbw5oHzwonlzRB75UXzvwicIIYTQeRBCCKH7PBG2euvNeDhYLrfKF/v2/LwcDMej/iokYW+3fRQx51zKNE1flX+H18NPpFJyHsuXt/EkAOHTpsNimYqvhRKlMPdiRSq5nO5aXgtn05in3xYiC89MmSxG3gozxsXPhcoJj0jOhl4Ks1QWLlRaeEhKldGNcN2+9bG0ivBgZDO/hJ2kYP88V03IWDz1SDhh34eXXFWFh9954+BhX7i5vQFZDSETyc4P4TBRLlRdeFi2cMCxLRxo1ldHyOKBe2Gm3oI1hSzJXAtHOmBNIUt+HjWsCuf6ldUUMj53KnxXjaLn6grFu0vhtvhE7aq6QiaX7oQT7ZuQGRCypOdM+KLfR00IxYcr4Yi0pvpCFl+Pp/aEhGGGGRGKvRvhjHYbz4CQxWsnwj+kTWhEKBYuhHPKQMrMCFmSv9hoSzhQfCa8enEmhFdXNWwJ27Sd1IzwaqyxJOxRV2NEyOLc2aklYUY4YTtlRijH1oUL4k5qSChy16UsCcnfaTEjZMK2cGJbmHsj2hHuqG9DU0L+dTfDjnBJPBoaE6Zf16TsCLvUgcbY+7BjWUj7XHHMlPDFspD+9UBDwtxgakW4oq/ElDC2KySfsxkUXj5eWBHSD4fGhPxyPcqKsO9AeLnXZkU4Ix/wzQn7VoUjB9vwFwkb/J63nPfOzcf291I57n/W4L8j8M/oQGNCJi9rL//CG82Y0NsgDD8Iww/C8IMw/CAMPwjDD8Lwg9CvdLMdFC1TQVhlNWbiUUtZ1DYibOtW43BOBVNCTRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6L9QLB6VLYoWqnCHVLca8n+VVSBqMiSsshqHhXUfv0oQhh+E4Qdh+EEYfhCGH4ThB2H4QRh+EIbf/QtjlbDBKS7sJVXCiDhFqNepr++WmH7C13JzdBVFnzPM28TNR42cegxfmH6fUf26N/Lcfd6Wn3i0IPI0qP7G1U8aW/s22Uz5NHfknoI/XIiuWkidFdzf+EYjLDHjlJ+pz2ii8M/bZNGzfq7bhn28SLXAqBX0aJroHmV4bBfwfsqfCcAo6gS7FXlHrzvVDZMoEv0o89lW+Ww6PxN8T3sw7Ln+e9EDPv1NyOQPZYzJt/lIpM9Ikf7v+GRfNh0/lPQdm2ddEZ+fIXzKtekqsd8+H9ouB9mmzNOZf7Tqb7LB8vzL9q5V+QR11CzT1KedthEhfWJ7C0EIYQDCv3cvvP9tCCGE/gunqwfTrZr8Sn75hG6KtQp5BUQIIYQQQgghhBBCCCGEEELoN/QPrDRW+kDWrG8AAAAASUVORK5CYII=\nFN:${params.get("name")}\nTEL;TYPE=CELL:${params.get("phone")}\nEND:VCARD`
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
            src={`data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEXiAHT////gAGf87PPgAGrgAGb/+v3iAHHjGHrnUpD//P7hAG/hAGzsgKvqbqHoYJj65Oz41OPvlbnwnr72xNfzr8n63ejpZ53xpcP2xtn86/LmPojnTY/nV5LujLL+9Pn3zd30vNHth6/fAGDseqfztMzkJX7lM4PmQ4rqbaFnGP+9AAAEHElEQVR4nO3de0OqMBjH8UHDWSzvF7TjtczO+3+Dx8vJsHB7gLGL/b5/R/gJHAg2GEMIIYQQQgghhBBCCCGEEEIINVHsRbw5oHzwonlzRB75UXzvwicIIYTQeRBCCKH7PBG2euvNeDhYLrfKF/v2/LwcDMej/iokYW+3fRQx51zKNE1flX+H18NPpFJyHsuXt/EkAOHTpsNimYqvhRKlMPdiRSq5nO5aXgtn05in3xYiC89MmSxG3gozxsXPhcoJj0jOhl4Ks1QWLlRaeEhKldGNcN2+9bG0ivBgZDO/hJ2kYP88V03IWDz1SDhh34eXXFWFh9954+BhX7i5vQFZDSETyc4P4TBRLlRdeFi2cMCxLRxo1ldHyOKBe2Gm3oI1hSzJXAtHOmBNIUt+HjWsCuf6ldUUMj53KnxXjaLn6grFu0vhtvhE7aq6QiaX7oQT7ZuQGRCypOdM+KLfR00IxYcr4Yi0pvpCFl+Pp/aEhGGGGRGKvRvhjHYbz4CQxWsnwj+kTWhEKBYuhHPKQMrMCFmSv9hoSzhQfCa8enEmhFdXNWwJ27Sd1IzwaqyxJOxRV2NEyOLc2aklYUY4YTtlRijH1oUL4k5qSChy16UsCcnfaTEjZMK2cGJbmHsj2hHuqG9DU0L+dTfDjnBJPBoaE6Zf16TsCLvUgcbY+7BjWUj7XHHMlPDFspD+9UBDwtxgakW4oq/ElDC2KySfsxkUXj5eWBHSD4fGhPxyPcqKsO9AeLnXZkU4Ix/wzQn7VoUjB9vwFwkb/J63nPfOzcf291I57n/W4L8j8M/oQGNCJi9rL//CG82Y0NsgDD8Iww/C8IMw/CAMPwjDD8Lwg9CvdLMdFC1TQVhlNWbiUUtZ1DYibOtW43BOBVNCTRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6L9QLB6VLYoWqnCHVLca8n+VVSBqMiSsshqHhXUfv0oQhh+E4Qdh+EEYfhCGH4ThB2H4QRh+EIbf/QtjlbDBKS7sJVXCiDhFqNepr++WmH7C13JzdBVFnzPM28TNR42cegxfmH6fUf26N/Lcfd6Wn3i0IPI0qP7G1U8aW/s22Uz5NHfknoI/XIiuWkidFdzf+EYjLDHjlJ+pz2ii8M/bZNGzfq7bhn28SLXAqBX0aJroHmV4bBfwfsqfCcAo6gS7FXlHrzvVDZMoEv0o89lW+Ww6PxN8T3sw7Ln+e9EDPv1NyOQPZYzJt/lIpM9Ikf7v+GRfNh0/lPQdm2ddEZ+fIXzKtekqsd8+H9ouB9mmzNOZf7Tqb7LB8vzL9q5V+QR11CzT1KedthEhfWJ7C0EIYQDCv3cvvP9tCCGE/gunqwfTrZr8Sn75hG6KtQp5BUQIIYQQQgghhBBCCCGEEELoN/QPrDRW+kDWrG8AAAAASUVORK5CYII=`} 
            onClick={(e) => {
                console.log(e)
            setActive(!active)
        }} />
        {/* Menu */}
    </div>
}