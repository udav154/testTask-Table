import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from './router'

const App: React.FC = () => {

  return (
    <Routes>
      {routes.map(route => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        )
      })}
    </Routes>
  )
}

export default App