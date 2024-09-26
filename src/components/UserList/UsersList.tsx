import {useUsers} from '../../hooks/reqres';
import {User} from '../../types/users.types';

interface UserItemProps {
  user: User;
}

const UserItem = (props: UserItemProps) => {
  const {
    user: {first_name, last_name, email},
  } = props;
  return (
    <div className='flex border mb-1 last:mb-0 bg-slate-100 items-stretch content-center'>
      <div className='basis-[40%] p-2 pl-4 items-center flex'>{`${last_name}, ${first_name}`}</div>
      <div className='flex-1 p-2 pl-4 bg-red-100 items-center flex'>
        {email}
      </div>
    </div>
  );
};

export const UserList = () => {
  const {users} = useUsers();

  return (
    <div className='border m-4 p-4 bg-slate-50'>
      <div className='bg-black text-white flex pt-2 pb-2 font-semibold items-stretch'>
        <div className='basis-[40%] pl-4 flex items-center'>Full name</div>
        <div className='pl-4 flex items-center'>Email</div>
      </div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};
