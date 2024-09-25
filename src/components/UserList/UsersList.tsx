import {User} from '../../types/users.types';

interface UserListProps {
  users: User[];
}

interface UserItemProps {
  user: User;
}

const UserItem = (props: UserItemProps) => {
  const {
    user: {first_name, last_name, email},
  } = props;
  return (
    <div className='flex items-center border mb-1 last:mb-0 p-1 bg-slate-100'>
      <div className='basis-[40%]'>{`${last_name},${first_name}`}</div>
      <div className='flex-1'>{email}</div>
    </div>
  );
};

export const UserList = (props: UserListProps) => {
  const {users} = props;

  return (
    <div className='border m-4 p-4 bg-slate-50'>
      <div className='bg-black text-white flex p-2 font-semibold'>
        <div className='basis-[40%]'>Full name</div>
        <div>Email</div>
      </div>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};
