import { lazy } from "react"

export const importData = (compo) => {
    if(compo === "actors") {
        return lazy(() => import(`./demoComponent/actors/Actors`))
    }
    if(compo === "actress") {
        return lazy(() => import(`./demoComponent/actress/Actress`))
    }
    else {
        return lazy(() => import(`./demoComponent/movies/Movies`))
    }
}