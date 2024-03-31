'use client'

import React from "react"
import { View } from "./view"

export const Client = () => {
    const [ photo, setPhoto ] = React.useState<string | undefined>()



    const url = ""



    const handle = {
        photo: {
            onUpload(e: any) {
                console.log("testing: ", e.target.value)
                setPhoto(e.target.value.toString())
                console.log(photo)
            }
        }
    }

    return <View
        photo={photo}
        photoChange={(e: any) => handle.photo.onUpload(e)}
    />
}