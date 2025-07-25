import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('https://<your-backend-api>.azurewebsites.net/api/message')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>React + Azure + Node</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
