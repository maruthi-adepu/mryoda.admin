import { setTitle } from '@/store/slices/topbarSlice';
import { RootState } from '@reduxjs/toolkit/query';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const topbarHooks = () => {

    const dispatch = useDispatch();

    const handleSelectTitile=(title:string)=>{
        dispatch(setTitle(title))
    }



  return { handleSelectTitile }
}

export default topbarHooks
