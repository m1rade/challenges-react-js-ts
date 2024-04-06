import { useContext } from 'react';

export const useCustomContext = <T>(context: React.Context<T>) => {
  const returnedContext = useContext(context);
  if (!returnedContext) throw new Error('Context hook has to be used within its nearest context provider');
  return returnedContext;
};
