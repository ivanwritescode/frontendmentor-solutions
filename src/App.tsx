import './App.css'
import ResultsSummaryComponent from './Solutions/ResultsSummaryComponent'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResultsSummaryComponent /> 
  },
  {
    path: "/1",
    element: <ResultsSummaryComponent />
  }
],
{
  basename: "/frontendmentor-solutions"
})

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
