import { useState } from 'react';
import './App.css';
function App() {

  const [count, setCount] = useState(0);

  const restar = () => {

    count <= 0 ? '' : setCount((count) => count - 1);

  };

  const sumar = () => {
    setCount((count) => count + 1);
  };


  return (
    <>

      <div className='contain-count'>
        <button onClick={restar}>
          <span>restar</span>
        </button >

        <strong>{count} </strong>

        <button onClick={sumar}>
          <span>sumar</span>
        </button >
      </div>


    </>
  );
}

export default App;
