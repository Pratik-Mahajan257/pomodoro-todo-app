import React from 'react';
// import { useRouter } from 'next/router';
import { FaHome, FaSearch,  FaListUl } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai'
import { MdAnalytics } from 'react-icons/md'
// import Search from '../pages/Search';
// import Notifications from '../pages/Notifications';
// import Profile from '../pages/Profile';

const Footer = () => {
 

  return (
    <footer className=" w-full rounded-xl bg-gray-900">
      <div className="container px-4 mx-auto flex justify-center items-center py-4">
        <a
          href="/"
          className="text-white mr-4"
         
        >
          <FaHome className='text-yellow-500  text-xl ' />
        </a>
          <a
          href="/list"
          className="text-white mr-4"
          
        >
          <FaListUl className='text-yellow-500 text-xl ' />
        </a>
        <a
          href="/analytics"
          className="text-white mr-4"
       
        >
          <MdAnalytics className='text-yellow-500 text-xl '/>
        </a>
      
        <a
          href="/setting"
          className="text-white"
         
        >
          <AiFillSetting className='text-yellow-500 text-xl ' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
