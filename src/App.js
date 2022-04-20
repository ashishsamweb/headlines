import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/action";
import {Latest} from "./components/Latest/Latest"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Chart } from "./components/Chart/Chart";



export const App = () => {
  const { posts,  loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  if(loading) {
    return <h2>Loading....</h2>
  }

    return (
      <div>
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path="/latest" component={Latest} />
        <Route exact path="/chart" component={Chart} />
        <Route path="" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
      
      </div>
    );
  }
  

export default App;

