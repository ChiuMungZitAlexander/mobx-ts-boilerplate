import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { useGlobalStore } from 'src/contexts/GlobalContext';

const App = observer(() => {
  const { isLoggedIn, logIn } = useGlobalStore();

  const [name, setName] = useState('');

  return (
    <div>
      <h2>{`LoggedIn? ${String(isLoggedIn)}`}</h2>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength={4}
        maxLength={8}
        size={10}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => logIn({ name })}>Login</button>
    </div>
  );
});

export default App;
