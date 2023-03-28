import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Notfound from './component/Notfound/Notfound';
import Home from './component/Home/Home';
function App() {
  const router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home />},
      {path:'portfolio',element:<Portfolio/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound />},
    ]}
  ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
