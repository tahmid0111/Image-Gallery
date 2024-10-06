import { lazy } from "react"

export const importData = (compo) => {
    if(compo === "actors") {
        return lazy(() => import(`./actors/Actors`))
    }
    if(compo === "actress") {
        return lazy(() => import(`./actress/Actress`))
    }
    else {
        return lazy(() => import(`./movies/Movies`))
    }
}