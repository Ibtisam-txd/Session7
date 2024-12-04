import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import NotFound from './components/NotFound';

// In App.jsx
const HeavyDataPage = lazy(() => import('./components/HeavyDataPage'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* About Route */}
          <Route path="/about" element={<About />} />

          {/* Dashboard Route with Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}/>

          {/* Route with Parameters */}
          <Route path="/student/:id" element={<ParamComp />} />

          {/* Lazy Loaded Heavy Data Page */}
          <Route path="/heavy-data" element={
            <Suspense fallback={<div>Loading...</div>}>
              <HeavyDataPage />
            </Suspense>
          } />


          {/* Catch-All Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
