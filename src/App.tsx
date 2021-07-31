import { observer } from 'mobx-react-lite';

import { useGlobalStore } from 'src/contexts/GlobalContext';

const App = observer(() => {
  const { isLoggedIn } = useGlobalStore();

  return <div>{String(isLoggedIn)}</div>;
});

export default App;
