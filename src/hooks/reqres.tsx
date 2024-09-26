import {useCallback, useEffect, useState} from 'react';
import {User} from '../types/users.types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const getUsers = useCallback(
    async (signal: AbortSignal) => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/users`, {signal});
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const usersData = await res.json();
        setUsers(usersData);
      } catch (e) {
        if (e instanceof Error) {
          if (e.name !== 'AbortError') {
            console.error('Error getting users', e);
            setError('Failed to fetch users');
          }
        } else {
          console.error('Error getting users');
          setError('Failed to fetch users');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [apiUrl],
  );

  useEffect(() => {
    const controller = new AbortController();
    getUsers(controller.signal);
  }, [getUsers]);

  return {
    users,
    isLoading,
    error,
  };
};
