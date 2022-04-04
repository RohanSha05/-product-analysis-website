import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center text-2xl m-6'>
            <CustomLink className='mx-6' to='/'>HOME</CustomLink>
            <CustomLink className='mx-6' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='mx-6' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='mx-6' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='mx-6' to='/about'>ABOUT</CustomLink>
        </div>
    );
};

export default Header;