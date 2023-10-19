'use client';

import CustomTextInput from './components/forms/CustomTextInput';
import { FaSearch } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      <h1>Movies</h1>

      <form>
        <div className='form-input w-1/3'>
          <CustomTextInput
            rightIcon={FaSearch}
            placeholder='Search for a title'
          />
        </div>
      </form>
    </>
  )
}

export default HomePage