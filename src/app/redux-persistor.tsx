import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './store';

type Props = {
  children: React.ReactNode;
};

function ReduxPersistor({ children }: Props) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}

export default ReduxPersistor;
