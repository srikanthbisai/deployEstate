
import Homepage from './routes/homepage/Homepage'
import { createBrowserRouter, RouterProvider
} from 'react-router-dom';
import Listpage from './routes/listpage/Listpage';
import Layout from './routes/layout/Layout';
import Singlepage from './routes/singlepage/Singlepage';
import Register from './routes/register/Register';
import Login from './routes/login/Login';
import ProfilePage from './routes/profile/ProfilePage';
import RequireAuth from './routes/layout/RequireAuth';
import ProfileUpdatePage from './routes/profileUpdatePage/ProfileUpdatePage';
import NewPostPage from './routes/newPostPage/NewPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';


function App() {

  const router = createBrowserRouter([
       {
        path: '/',
        element: (<Layout/>),
        children: [
          {
            path: '/',
            element: (<Homepage/>),
          },
          {
            path: '/list',
            element: (<Listpage/>),
            loader: listPageLoader,
          },
          {
            path: '/:id',
            element: (<Singlepage/>),
            loader: singlePageLoader,
          },
          {
            path:"/register",
            element: (<Register/>)
          },
          {
            path:"/Login",
            element: (<Login/>)
          },
        ],
       },
       {
        path: "/",
        element: <RequireAuth />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
            loader: profilePageLoader,
          },
          {
            path: "/profile/update",
            element: <ProfileUpdatePage />,
            
          },
          {
            path: "/add",
            element: <NewPostPage />,
            
          },
        ],
      },
  ]);


    
  return (
    <RouterProvider router={router}/>
  )
}

export default App