'use client';

import { ratingOptions, sortByOptions } from '@/utils/selectOptions';

import CustomSelectInput from './components/forms/CustomSelectInput';
import CustomTextInput from './components/forms/CustomTextInput';
import { FaSearch } from 'react-icons/fa';
import Grid from './components/Grid';

const HomePage = () => {
  return (
    <>
      <h1>Movies</h1>
      <section className='section-search-filter'>
        <form className='search-form md:w-1/3 sm:w-full'>
          <div className='form-input mb-4'>
            <CustomTextInput
              rightIcon={FaSearch}
              placeholder='Search for a title'
            />
          </div>
        </form>

        <div className='filters'>
          <p className='text-sm text-gray-300 mb-2'>Sort by</p>
          <div className="flex">
            <CustomSelectInput options={sortByOptions} />
            <CustomSelectInput options={ratingOptions} />
          </div>
        </div>
      </section>
      <section className='section-movies'>
      <Grid />
      </section>
    </>
  )
}

export default HomePage