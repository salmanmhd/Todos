import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const isCreate = location.pathname === '/' || location.pathname === '/create';

  return (
    <div className='bg-black items-center px-10 h-16 text-white flex justify-between border-b border-white sticky top-0 z-50'>
      <Link to='/'>
        <img
          className='h-12 w-12 hover:opacity-80 hover:scale-105 transition-all duration-200'
          src='/logoWhite.png'
          alt='logo'
        />
      </Link>
      <div className='flex gap-12'>
        <Link to='/myday' className='hover:text-orange-500'>
          My Day
        </Link>
        <Link to='/plan' className='hover:text-orange-500'>
          Plan
        </Link>
        <Link to='/alltasks' className='hover:text-orange-500'>
          All Tasks
        </Link>
        <Link to='/journal' className='hover:text-orange-500'>
          Journal
        </Link>
        {!isCreate && (
          <Link
            to='/create'
            className='bg-orange-500 text-white py-1 px-3 rounded-lg hover:bg-orange-600'
          >
            Create Task
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
