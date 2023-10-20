'use client';

import { ratingOptions, sortByOptions } from '@/utils/selectOptions';

import CustomSelectInput from './components/forms/CustomSelectInput';
import CustomTextInput from './components/forms/CustomTextInput';
import { FaSearch } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      <h1>Movies</h1>
      <section className='section-search-filter flex justify-between'>
        <form className='search-form w-1/3'>
          <div className='form-input'>
            <CustomTextInput
              rightIcon={FaSearch}
              placeholder='Search for a title'
            />
          </div>
        </form>

        <div className='filters'>
          <p className='text-sm text-gray-300 mb-2'>Sort by</p>
          <div className="flex space-x-3">
            <CustomSelectInput options={sortByOptions} />
            <CustomSelectInput options={ratingOptions} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage