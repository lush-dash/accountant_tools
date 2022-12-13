import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <AppRouter />
    </div>
  );
}

export default App;
