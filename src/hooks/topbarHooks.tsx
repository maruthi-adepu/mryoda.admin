import { setTitle, setTopbarRoute } from '@/store/slices/topbarSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
const topbarHooks = () => {
  const dispatch = useDispatch();
  const router = useRouter();
 
  const handleSelectTitle = (item: any) => {
    dispatch(setTitle(item.title));
    router.push(item.route);
    dispatch(setTopbarRoute(item.route))
  };
 
  return { handleSelectTitle };
};
 
export default topbarHooks;
 