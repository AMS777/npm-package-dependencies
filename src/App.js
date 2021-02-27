import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/global.css';
import './styles/components.css';

import { Homepage } from './pages';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
}

export default App;
