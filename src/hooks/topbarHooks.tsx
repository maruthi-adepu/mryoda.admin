import { setTitle } from '@/store/slices/topbarSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



const topbarHooks = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const routes : { [key: string]: string } = {
    "Dashboard": "/dashboard",
    "Register New Membership": "/newmember",
    "Members": "/viewmember",
    "Transaction History": "/transactions",
    "Renew Membership": "/renew",
    "Cashback": "/cashback",
    "Appointments": "/appointments",
    "Reports": "/reports"
};

  const handleSelectTitile = (title: string) => {
    dispatch(setTitle(title)); 
    const path = routes[title];
    if (path) {
      router.push(path);
    }
  }



  return { handleSelectTitile }
}

export default topbarHooks
