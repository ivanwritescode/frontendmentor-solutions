import './App.css'
import ResultsSummaryComponent from './Solutions/ResultsSummaryComponent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/frontendmentor-solutions/",
    element: <ResultsSummaryComponent /> 
  },
  {
    path: "/frontendmentor-solutions/ResultsSummaryComponent/",
    element: <ResultsSummaryComponent />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
