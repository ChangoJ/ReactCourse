import { memo } from "react"

export const Small = memo(({value}:any) => {

    console.log("me volvi a dibujar :(")
  return (
    <small>{ value}</small>
  )
})
