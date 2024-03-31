import { Suspense } from "react"
import { Client } from './client'

//  --------
export const Card = () => {

    console.log("hello")

    return <>
        <Suspense fallback={<>Loading...</>}>
            <Client />
        </Suspense>
    </>
}