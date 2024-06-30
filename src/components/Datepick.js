import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Datepick({ selectedDate, setSelectedDate }) {
  return (
    <div className='border-gray-500 bg-white rounded-lg border p-2 mb-4 w-full'>
      <Datepicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className='w-full ' // Apply the custom class
      />
    </div>
  );
}

export default Datepick;
