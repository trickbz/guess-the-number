import {useCallback, useEffect, useState} from 'react';
import {User, UserResponse} from '../types/users.types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = useCallback(async (signal: AbortSignal) => {
    setIsLoading(true);
    try {
      const res = await fetch('https://reqres.in/api/users?page=2', {signal});
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const usersRes: UserResponse = await res.json();
      const usersData = usersRes.data;
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
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getUsers(controller.signal);
  }, []);

  return {
    users,
    isLoading,
    error,
  };
};
