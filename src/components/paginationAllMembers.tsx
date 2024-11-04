import React from 'react';
import { useViewAllMembersDetailsQuery } from '@/api/viewAllMember/viewAllMember';
import { RootState } from '@/store/store';
import { TablePagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setPageSize } from '@/store/slices/viewMemberDetailsSlice';
import { count } from 'console';

const PaginationAllMembers = ({ viewAllMembers }: { viewAllMembers: any }) => {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state: RootState) => state.viewMemberDetails);



  return (
    <TablePagination
  component="div"
  labelDisplayedRows={({ from, to, count }) => {
    return ` Showing Results ${from}-${to} of ${count}  `;
  }}
  count={viewAllMembers?.total || 0}
  page={page - 1}
  onPageChange={(event, newPage) => {
    dispatch(setPage(newPage + 1));
  }}
  rowsPerPage={pageSize}
  rowsPerPageOptions={[5, 10, 25]}
 
  onRowsPerPageChange={(event) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    
  }}
    labelRowsPerPage=""
 
/>

  
 
  

    
  );
};

export default PaginationAllMembers;
