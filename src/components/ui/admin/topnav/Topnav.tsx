'use client';
import { logout } from '@/actions/auth/logout';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import { IoMenuOutline } from 'react-icons/io5';

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Topnav( { setToggle, toggle }: Props ) {

  const { data: session } = useSession();
  const [ user, setUser ] = useState( false );

  const toggleHandler = () => {
    setToggle( !toggle );
  };

  const onLogout = async () => {
    await logout();
    window.location.replace( '/auth/login' );
    setUser( false );
  };

  return (
    <>
      {
        session?.user && (
          <div className="top-header">
            <div className="header-bar flex justify-between">
              <div className="flex items-center space-x-1">
                <Link id="close-sidebar" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 border border-gray-200 text-slate-900 rounded-full" href="#">
                  <IoMenuOutline className="size-6" onClick={ toggleHandler } />
                </Link>
              </div>

              <ul className="list-none mb-0 space-x-1">
                <li className="dropdown inline-block relative">
                  <button onClick={ () => setUser( !user ) } className="dropdown-toggle items-center" type="button">
                    <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 hover:bg-gray-100 border border-gray-100 text-slate-900  rounded-full">
                      <Image src='/uploads/favicon.ico' width={ 30 } height={ 30 } className="rounded-full" alt="" />
                    </span>
                    <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">{ session?.user.name }</span>
                  </button>
                  <div className={
                    clsx(
                      "dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-slate-800 shadow", {
                      "": user,
                      "hidden": !user
                    }
                    )
                  } >
                    <ul className="py-2 text-start">
                      <li>
                        <Link href="/admin/profile" className="flex items-center font-medium py-1 px-4 hover:text-indigo-600 dark:hover:text-white text-white"><AiOutlineUser className="me-2" />Perfil</Link>
                      </li>
                      <li>
                        <button className="flex items-center font-medium py-1 px-4 hover:text-indigo-600 dark:hover:text-white text-white" onClick={ onLogout }>
                          <IoMdLogOut className="me-2" />
                          <span>Salir</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </>
  );
}