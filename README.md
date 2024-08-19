# ReactRouterExample
Just a react router example , so i can get back to it when i forget it

General steps :
1.npm install react-router-dom
2.Create a route array and export it and import in the main.jsx component.
3.import { createBrowserRouter, RouterProvider } from "react-router-dom" in the main.jsx file itself.
4.Create a router : const router = createBrowserRouter(routes);
5.Render the router using : <React.StrictMode>
                            <RouterProvider router={router} />
                           </React.StrictMode>
6.The "routes" is an array comprising of various path objects which consist of a path and element each , and can have children also . Element is basically a component name , the root element path is given by "/".
7.Instead of the anchor tag <a/> Use the <Link/> component from "react-router-dom" which will actually render the elements. Link component take a "to" prop that is basically the path name.
8.import { useParams } from "react-router-dom" can be used to render components Dynamically based on the url. It basically means URL Parameters . Use it by making an object declaration ex : const {name]=useParams();
