'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Box, TextField, MenuItem, Select, Button, IconButton, Avatar, Typography, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profileIcon from '../../public/images/profileIcon.png'
import Image from 'next/image';


const columns = [
    { id: 'name', label: 'Member Name' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'memberId', label: 'Member ID' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'expiryDate', label: 'Expiry Date' },
    { id: 'cashbackBalance', label: 'Cashback Balance' },
    { id: 'status', label: 'Status' },
    { id: 'activity', label: 'Activity' },
    { id: 'actions', label: 'Actions' },
];

const rows = [
    {
        name: 'Srinivasulu Venkata Ramana Reddy',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 456.00',
        status: 'Active',
        activity: 'Recent Activity',
    },
    {
        name: 'Lakshmi Nivas Chowdary',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 126.50',
        status: 'Active',
        activity: 'Recent Activity',
    },
    {
        name: 'Mallikarjuna',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 1700.00',
        status: 'Expired',
        activity: 'Recent Activity',
    },
    {
        name: 'Mallikarjuna',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 1700.00',
        status: 'Expired',
        activity: 'Recent Activity',
    }, {
        name: 'Mallikarjuna',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 1700.00',
        status: 'Expired',
        activity: 'Recent Activity',
    }, {
        name: 'Mallikarjuna',
        mobile: '9876543210',
        memberId: 'YODA123456',
        startDate: '01/01/2023',
        expiryDate: '01/01/2024',
        cashbackBalance: '₹ 1700.00',
        status: 'Expired',
        activity: 'Recent Activity',
    },
    // Add more rows as needed
];

export default function DataTable() {
    const [status, setStatus] = React.useState('Active');
    const [memberType, setMemberType] = React.useState('All');
    const [selectedDate, setSelectedDate] = React.useState<string | null | undefined>(null);



    return (
        <>
            <Container maxWidth="xl">
                <Box padding={2}>
                    <Grid container spacing={2} alignItems="center">
                        {/* Search Input */}
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                placeholder="Enter member name"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    width: '292px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderWidth: '2px',
                                            borderColor: '#E5E5E5',
                                        },
                                        '&:hover fieldset': { borderColor: '#E5E5E5' },
                                        '&.Mui-focused fieldset': { borderColor: '#E5E5E5' },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <SearchIcon color="action" />,
                                    style: {
                                        height: '36px',
                                        background: '#FFFFFF',
                                        borderRadius: '11px',
                                    },
                                }}
                            />
                        </Grid>

                        {/* Member Type Dropdown */}
                        <Grid item xs={12} sm={6} md={2} lg={1.5}>
                            <Select
                                value={memberType}
                                onChange={(e) => setMemberType(e.target.value)}
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{
                                    width: '144px',
                                    height: '34px',
                                    border: '1px solid #EAEAEA',
                                    borderRadius: '22px',
                                    background: '#FFFFFF',
                                }}
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Type1">Type 1</MenuItem>
                                <MenuItem value="Type2">Type 2</MenuItem>
                            </Select>
                        </Grid>

                        {/* Status Dropdown */}
                        <Grid item xs={12} sm={6} md={2} lg={1.5}>
                            <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{
                                    width: '144px',
                                    height: '34px',
                                    border: '1px solid #EAEAEA',
                                    borderRadius: '22px',
                                    background: '#FFFFFF',
                                }}
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </Select>
                        </Grid>

                        {/* Date Picker */}
                        <Grid item xs={12} sm={6} md={2} lg={1.5}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    // label="Select dates"
                                    value={selectedDate}
                                    onChange={(newValue:any) => setSelectedDate(newValue)}
                                    sx={{
                                        width: '174px', // Set width of the DatePicker input
                                        '& .MuiOutlinedInput-root': {
                                            height: '36px', // Set height of the input box wrapper
                                            borderRadius: '22px', // Set border radius
                                            backgroundColor: '#FFFFFF', // Set background color
                                            border: '1px solid #EAEAEA', // Set border color
                                            paddingRight: '10px', // Adjust spacing if needed
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#EAEAEA', // Outline border color
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '8px 10px', // Adjust padding for better alignment
                                            height: '20px', // Adjust internal input height for text alignment
                                            boxSizing: 'border-box', // Ensure consistent sizing
                                        },
                                    }}

                                />
                            </LocalizationProvider>

                        </Grid>

                        {/* Clear Button */}
                        <Grid item xs={6} sm={4} md={1} lg={1}>
                            <Button
                                variant="text"
                                sx={{  padding: 0, color: '#3B5950', fontWeight: 700, fontSize: '12.2px', lineHeight: '16.23px', textTransform: 'capitalize'}}
                            >
                                Clear
                            </Button>
                            <svg width="35" height="2" viewBox="0 0 35 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="35" height="2" rx="1" fill="#03C136" />
                            </svg>

                        </Grid>

                        {/* Download CSV Button */}
                        <Grid item xs={6} sm={4} md={1.5}>
                            <Box >

                                <Button
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    sx={{ width: '156px', height: '36px', background: '#FFFFFF', borderRadius: '22px', border: '1px solid #EAEAEA', fontSize: '12.2px', fontWeight: 700, textTransform: 'capitalize', color: '#000000', lineHeight: '16.23px', display: 'flex', gap: 1 }} >
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_40_74)">
                                            <path d="M15.75 9.53125V13.875C15.75 14.2196 15.4696 14.5 15.125 14.5H2.875C2.53038 14.5 2.25 14.2196 2.25 13.875V9.53125H1V13.875C1 14.9089 1.84113 15.75 2.875 15.75H15.125C16.1589 15.75 17 14.9089 17 13.875V9.53125H15.75Z" fill="black" fillOpacity="0.8" />
                                            <path d="M12.0001 7.11613L9.62509 9.49113V-0.25H8.37509V9.49113L6.00009 7.11613L5.11621 8L9.00009 11.8839L12.884 8L12.0001 7.11613Z" fill="black" fillOpacity="0.8" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_40_74">
                                                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg> Download CSV
                                </Button>
                            </Box>
                        </Grid>

                        {/* Add Member Button */}
                        <Grid item xs={6} sm={4} md={1.5}>
                            <Button variant="contained" color="success" fullWidth sx={{ width: '127px', height: '36px', background: '#03C136', borderRadius: '22px', color: '#FFFFFF', lineHeight: '16.23px', fontWeight: 700, display: "flex", justifyContent: "space-between", fontSize: '12.2px', textTransform: 'capitalize'                                }} >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 3.08331V12.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.83325 7.75H13.1666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Add Member
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container maxWidth="xl">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} sx={{ color: '#61626A', fontSize: '11px', fontWeight: 700, lineHeight: '14.63px' }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index}>

                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Image src={profileIcon} alt='profileIcon' />
                                                <Typography sx={{ marginLeft: 1, color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.name}</Typography>
                                            </Box></TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.mobile}</TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.memberId}</TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.startDate}</TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.expiryDate}</TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>{row.cashbackBalance}</TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, fontSize: '11.9px', lineHeight: '15.83px' }}>
                                            <span>
                                                {row.status === 'Active' ?
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="3.5" cy="3.5" r="3" fill="#0DC44A" />
                                                        </svg>
                                                        Active
                                                    </Box>
                                                    :
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                                                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="3" cy="3.5" r="3" fill="#FD6206" />
                                                        </svg>
                                                        Expired
                                                    </Box>}
                                            </span>
                                        </TableCell>
                                        <TableCell sx={{ color: '#61626A', fontWeight: 700, }}>{row.activity}</TableCell>
                                        <TableCell>
                                            <IconButton sx={{ color: '#000000' }}>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container></>
    );
}
