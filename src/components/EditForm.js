import { X } from 'lucide-react';
import Form from './Form';
import { useContext, useRef } from 'react';
import { TaskContext } from '../App';

function EditForm({ task, onClose }) {
  const { onUpdateTask } = useContext(TaskContext);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className='fixed inset-0 bg-opacity-40 bg-black backdrop-blur-sm flex items-center justify-center z-50'
    >
      <div className='relative bg-white p-6 rounded-lg shadow-lg'>
        <button onClick={onClose} className='absolute top-4 right-4'>
          <X />
        </button>
        <div className='w-5/6 items-center '>
          <Form task={task} onUpdateTask={onUpdateTask} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default EditForm;
