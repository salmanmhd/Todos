import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  console.log(new Date());
  return (
    <>
      <div
        className='flex flex-col items-center justify-center h-screen w-full'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className='text-white text-center p-6'>
          <div className='my-16'>
            <p className='italic text-gray-200'>
              "Plans are nothing; planning is everything." – Dwight D.
              Eisenhower
            </p>
            <p className='italic text-gray-200'>
              "By failing to prepare, you are preparing to fail." – Benjamin
              Franklin
            </p>
          </div>
          <p className='text-5xl font-thin p-4'>Start Planning Your Task</p>
          <p className='text-xl text-gray-200 mb-10'>
            "The secret of getting ahead is getting started." – Mark Twain
          </p>
          <button
            onClick={() => navigate('create')}
            className='mt-10 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'
          >
            Create Task
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
