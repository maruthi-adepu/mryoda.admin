import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TablePagination, IconButton, Box } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useViewAllMembersDetailsQuery } from '@/api/viewAllMember/viewAllMember';
import { RootState } from '@/store/store';
import { setPage, setPageSize } from '@/store/slices/viewMemberDetailsSlice';

const PaginationAllMembers = ({ viewAllMembers }: { viewAllMembers: any }) => {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state: RootState) => state.viewMemberDetails);

  const handleFirstPageButtonClick = () => {
    dispatch(setPage(1));
  };

  const handleBackButtonClick = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNextButtonClick = () => {
    const totalPages = Math.ceil((viewAllMembers?.total || 0) / pageSize);
    if (page < totalPages) dispatch(setPage(page + 1));
  };

  const handleLastPageButtonClick = () => {
    const totalPages = Math.ceil((viewAllMembers?.total || 0) / pageSize);
    dispatch(setPage(totalPages));
  };

  useEffect(() => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  }, [page, pageSize]);

  return (
    <div className="pagination-container">
      <TablePagination
        component="div"
        count={viewAllMembers?.total || 0}
        page={page - 1}
        onPageChange={(event, newPage) => {
          dispatch(setPage(newPage + 1));
        }}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onRowsPerPageChange={(event) => {
          dispatch(setPageSize(parseInt(event.target.value, 10)));
        }}
        labelRowsPerPage=""
        labelDisplayedRows={({ from, to, count }) => `Showing results ${from}-${to} of ${count}`}
        ActionsComponent={() => (
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 1}
              aria-label="first page"
              sx={{ pr: 0 }}
            >
              <FirstPageIcon />
            </IconButton>
            <IconButton
              onClick={handleBackButtonClick}
              disabled={page === 1}
              aria-label="previous page"
              sx={{ pl: 0 }}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <span>Page</span>
              <Box sx={{ minWidth: "35px", py: 0.5, borderRadius: "2px", border: '1px solid #EAEAEA', display: "flex", justifyContent: "center", alignItems: "center" }} >
                {page}
              </Box>
              of <span>{Math.ceil((viewAllMembers?.total || 0) / pageSize)}</span>
            </Box>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page === Math.ceil((viewAllMembers?.total || 0) / pageSize)}
              aria-label="next page"
              sx={{ pr: 0 }}
            >
              <KeyboardArrowRight />
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page === Math.ceil((viewAllMembers?.total || 0) / pageSize)}
              aria-label="last page"
              sx={{ pl: 0 }}
            >
              <LastPageIcon />
            </IconButton>
          </div>
        )}
        sx={{
          '.MuiTablePagination-select': {
            minWidth: "35px", py: 0.5, borderRadius: "2px", border: '1px solid #EAEAEA',
          }
        }}
      />
    </div>
  );
};

export default PaginationAllMembers;
