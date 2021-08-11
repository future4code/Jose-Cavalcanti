import React from "react"
import { TelaHome } from "./Telas/TelaHome/TelaHome"
import { TelaMatches } from "./Telas/TelaMatches/TelaMatches"

const App = () => {
  return (
    <div>
      <h1>Astromatch</h1>
      <TelaHome />
      <TelaMatches />
    </div>
  )
}
export default App