import "./assets/scss/style.scss";

import {Route, Routes} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {API_URL_APOLLO} from "./config/env";
import Homepage from "./pages/homepage";
import LastYear from "./pages/lastYear";
import Header from "./components/header";
import ThisMonth from "./pages/thismonth";

const client = new ApolloClient({
  uri: API_URL_APOLLO,
  cache: new InMemoryCache()
})


function App() {
  return (
      <div className="App">
        <ApolloProvider client={client}>
          <div id="App">
            <Header/>
            <Routes>
              <Route exact path="/" element={ <Homepage/>} />
              <Route exact path="/lastyear" element={ <LastYear/>} />
              <Route exact path="/thismonth" element={ <ThisMonth/>} />
            </Routes>
          </div>
        </ApolloProvider>
      </div>
  );
}

export default App;
