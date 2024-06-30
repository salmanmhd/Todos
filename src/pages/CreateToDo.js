import Form from '../components/Form';
import CompletedTask from '../components/CompletedTask';
import IncompletedTask from '../components/IncompletedTask';

function CreateToDo() {
  return (
    <>
      <div className='flex justify-between'>
        <div className='w-3/5'>
          <div className='w-3/5'>
            <Form />
          </div>
          <div className='m-10 w-3/5'>
            <CompletedTask />
          </div>
        </div>
        <div className='w-2/5'>
          <IncompletedTask />
        </div>
      </div>
    </>
  );
}

export default CreateToDo;
