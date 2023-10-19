'use client';

import { LOGO, SITE_NAME, TOTAL_LIKES } from '@/utils/constants';

import { Navbar } from 'flowbite-react';
import { routes } from '@/utils/routes';

const Header = () => {
  return (
    <header className='w-full'>
        <Navbar fluid rounded className="bg-transparent mx-auto container py-5">
            <Navbar.Brand className='order-2 mx-auto' href={routes.home.pathname}>
                <img
                    alt={`${SITE_NAME} Logo`}
                    className="mr-3 h-6 sm:h-9"
                    src={LOGO}
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='order-1'>
                <Navbar.Link href="#">Homepage</Navbar.Link>
                <Navbar.Link href="#">Series</Navbar.Link>
                <Navbar.Link href="#">Movies</Navbar.Link>
            </Navbar.Collapse>
            <div className='flex order-3'>
                <img
                    alt='total likes'
                    className="mr-3"
                    src={TOTAL_LIKES}
                />
            </div>
        </Navbar>
    </header>
  )
}

export default Header