import { ToastContainer } from 'react-toastify';
import { UserProvider } from './providers/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <div>
      <UserProvider>
        <GlobalStyles />
        <Router />
      </UserProvider>
    </div>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  </>
);

export default App;
