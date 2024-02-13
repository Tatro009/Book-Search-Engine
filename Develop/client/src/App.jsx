import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
