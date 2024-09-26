import {UserList} from './components/UserList';

function App() {
  const isProduction = process.env.NODE_ENV === 'production';

  const renderButtons = () => {
    return (
      <div className='rounded-md border-2 py-4 flex items-center justify-center w-[200px] ml-auto mr-auto'>
        <div className='w-10 h-10 border bg-blue-200 p-2 flex items-center justify-center font-bold'>
          1
        </div>
        <div className='w-10 h-10 border bg-blue-200 p-2 flex items-center justify-center font-bold'>
          2
        </div>
        <div className='w-10 h-10 border bg-blue-200 p-2 flex items-center justify-center font-bold'>
          3
        </div>
      </div>
    );
  };

  const renderUsers = () => {
    if (isProduction) {
      return null;
    }

    return <UserList />;
  };

  return (
    <div className='App'>
      <h1 className='font-semibold text-2xl text-gray-600 flex justify-center mb-4'>
        Welcome to the&nbsp;
        <span className='text-orange-500 font-bold'>Guess The Number</span>
        &nbsp;game!
      </h1>
      {renderButtons()}
      {renderUsers()}
    </div>
  );
}

export default App;
