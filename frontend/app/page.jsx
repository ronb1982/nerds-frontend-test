'use client';

import { sortByRatingOptions, sortByTitleOptions } from '@/utils/selectOptions';
import { useEffect, useState } from 'react';

import CustomSelectInput from './components/forms/CustomSelectInput';
import CustomTextInput from './components/forms/CustomTextInput';
import { FaSearch } from 'react-icons/fa';
import Grid from './components/Grid';
import { movies } from '@/utils/movies';

const HomePage = () => {
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    // sort films in ascending order by default
    if (sortedMovies?.length === 0) {
      setSortedMovies(movies.sort((a, b) => a.title.localeCompare(b.title)));
    }
  }, [sortedMovies]);

  const onSortByTitleChange = (event) => {
    const selectedValue = event.target.value;
    
    if (selectedValue === 'a-z') {
      // sort by title in ascending order
      setSortedMovies([...movies.sort((a, b) => a.title.localeCompare(b.title))]);
    } else { // 'z-a'
      // sort by title in descending order
      setSortedMovies([...movies.sort((a, b) => b.title.localeCompare(a.title))]);
    }
  }

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
            <CustomSelectInput options={sortByTitleOptions} onChange={onSortByTitleChange} />
            <CustomSelectInput options={sortByRatingOptions} />
          </div>
        </div>
      </section>
      <section className='section-movies'>
        {sortedMovies && (
          <Grid items={sortedMovies} />
        )}
      </section>
    </>
  )
}

export default HomePage