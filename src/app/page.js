
"use client"

import { Provider } from "react-redux"
import Board from "./components/board"
import Menu from "./components/menu"
import Toolbox from "./components/toolbox"
import { store } from "./redux/store"



export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Menu/>
        <Toolbox/>
        <Board/>
        </Provider>
 
    </>
  )
}
