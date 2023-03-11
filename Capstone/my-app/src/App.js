import React from "react";
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {MainContainer, CreateContainer, Header } from "./components";

const App = () => {
  return (
    <AnimatePresence mode="wait">
    <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header />

        <main className=" md: px-6 py-1 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="createItem" element={<CreateContainer />} />
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App