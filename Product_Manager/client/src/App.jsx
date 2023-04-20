//1.react imports

import { Navigate, Route, Routes } from 'react-router-dom';

//2.my custom imports
import Main from './components/Main';
import Detail from "./components/Detail";
import EditProductForm from "./components/EditProductForm";

function App() {

  return (
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to = '/products' />}/>
          <Route path='/products' element={<Main />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/products/:id/edit' element={<EditProductForm />} />
        </Routes>
      </div>
  );
}

export default App;
