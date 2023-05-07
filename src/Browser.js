import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Recorder from "./components/Recorder/Recorder";
import Work from "./components/Work/Works";
import Testimonial from "./components/Testimonial/Testimonial";

const AppRouter =() => {
   return (
        <BrowserRouter>
          <Switch>
             <Route path="/" component={Container} exact/>
             <Route path="/record" component={Recorder}/>
             <Route path="/work" component={Work}/>
             <Route path="/testimonial" component={Testimonial}/>
          </Switch>
        </BrowserRouter>
   )
}

export default AppRouter;