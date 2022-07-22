import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Buy from './components/Pages/Buy/Buy';
import Rent from './components/Pages/Rent/Rent';
import Navbar from './components/navbar/Navbar';
import Property from './components/Pages/Property/Property';
import Contact from './components/Pages/Contact/Contact';
import About from './components/Pages/About/About';
import Admin from './components/Pages/Admin/Admin';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: '3rem', color: 'rgb(26,55,58' }}>
                  404 NOT FOUND
                </h1>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/auth" element={<Admin />} />
          <Route path="/property">
            <Route path=":propertyId" exact element={<Property />} />
          </Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
