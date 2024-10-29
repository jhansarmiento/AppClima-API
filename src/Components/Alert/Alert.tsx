import { ReactNode } from "react"
import "./Alert.modules.css"

export default function Alert({children} : {children : ReactNode}) {
  return (
    <div className="alert">{children}</div>
  )
}
