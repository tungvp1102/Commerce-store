import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">       
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
