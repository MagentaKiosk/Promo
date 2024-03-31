'use client'

import React from "react"
import { View } from "./view"

export const Client = () => {
    const [ photo, setPhoto ] = React.useState<string>("")

    React.useEffect(() => {
        photo && console.log("testing: ", photo)
    }, [photo])

    return <View
        photo={photo}
        photoChange={(e: any) => setPhoto(e.target.value.toString())}
        formSubmit={(e: any) => {}}
    />
}