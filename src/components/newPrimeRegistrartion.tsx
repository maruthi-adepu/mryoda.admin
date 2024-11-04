'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import formImage from '../../public/images/newregistration.png'
import { Box, Grid, Button, Typography, FormLabel, Grid2, Container, TextField } from '@mui/material';
import { useAddNewMembershipMutation, useNewMemberShipRegistrationMutation } from '@/api/newPrimeRegistration/newPrimeRegistration';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';


const NewPrimeRegistration = () => {

    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [msg, setMsg] = useState("");
    const [msgError, setMsgError] = useState("");
    const [newMemberShipRegistration, { isLoading, isSuccess, error }] = useNewMemberShipRegistrationMutation();
    const [addNewMembership] = useAddNewMembershipMutation();
    // const handleRegister = async () => {
    //     try {
    //         const payload = {
    //             first_name: "Akash",
    //             last_name: "Smith",
    //             middle_name: "YOYO",
    //             country_code:"+91",
    //             gender: "Male",
    //             dob: "1990-05-20",
    //             mobile: "9339939442",
    //             email: "sssss@gmail.com",
    //             profile_pic: "https://example.com/profiles/janesmith.jpg",
    //             user_type: "Customer", // Set as either 'Customer', 'Manager', or 'Admin'
    //         };

    //         const result = await newMemberShipRegistration(payload);
    //         console.log("Registration successful:", result);
    //     } catch (err) {
    //         console.error("Failed to register:", err);
    //     }
    // };




    const handleChange = async (e: any, field: "mobileNumber" | "otp") => {
        const value = e.target.value;
    
        if (field === "mobileNumber") {
            setMobile(value);
    
            // Call the API if the mobile number length is 10
            if (value.length === 10) {
                handleRegisterMembership({ mobile: Number(value) });
            }
        } else if (field === "otp") {
            setOtp(value);
    
            // Call the API if OTP length is 6
            if (value.length === 6 && mobile.length === 10) {
                handleRegisterMembership({ mobile: Number(mobile), otp: value });
            }
        }
    };
    
    const handleRegisterMembership = async (payload: { mobile: number; otp?: string }) => {
        try {
            const result = await addNewMembership(payload);
            
            // Check if result contains data indicating a successful registration
            if ('data' in result) {
                // Registration was successful
                setMsg(result.data.msg || "Registration successful!");
                setMsgError(""); // Clear any previous error messages
            } else {
                // Here, result must be an error
                const error = result.error as FetchBaseQueryError;
    
                // Handle different types of FetchBaseQueryError
                if (error.status === "FETCH_ERROR") {
                    setMsgError(error.error || "Failed to register. Please try again.");
                } else if (error.status === "PARSING_ERROR") {
                    setMsgError("Failed to parse response. Please try again.");
                } else if (typeof error.data === 'object' && error.data !== null && 'msg' in error.data) {
                    // If error.data is an object and contains a msg field
                    setMsgError((error.data as { msg: string }).msg || "Failed to register.");
                } else {
                    setMsgError("An unknown error occurred. Please try again.");
                }
                setMsg(""); // Clear any previous success messages
            }
        } catch (err) {
            console.error("Failed to register:", err);
    
            // Handle unexpected errors
            if (err instanceof Error) {
                setMsgError(err.message);
            } else {
                setMsgError("Failed to register. Please try again.");
            }
            setMsg(""); // Clear any previous success messages
        }
    };
    
    


    
    return (
        <>
            {/* <div>
                <button onClick={handleRegister} disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register New Member'}
                </button>
                {isSuccess && <p>Member registered successfully!</p>}
                {error && <p>Error: {error.message}</p>}
            </div> */}
            <Container maxWidth="xl">
                <Grid container sx={{ marginTop: 5 }}>
                    <Grid item xs={12} sm={6} md={4} lg={3.2}>
                        <Box sx={{ height: '492px', borderRadius: '22px' }}>
                            <Image src={formImage} alt='' className='h-[492px] w-[372px]' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <Box sx={{
                            width: '574px',
                            height: '492px',
                            bgcolor: '#FFFFFF',
                            borderRadius: '22px',
                            p: 4,
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '28px',
                                color: '#515151',
                                marginTop: -2,
                                marginBottom: 4
                            }}>New Membership Registration</Typography>
                            <form>
                                <Box sx={{
                                    display: 'flex',
                                    width: '512px',
                                    height: '56px',
                                    gap: '16px',
                                    my: 2,
                                }}>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="fullName" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A',
                                            pb: 1,
                                        }}>First Name</FormLabel>

                                        <TextField placeholder="Enter First name" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="fullName" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A',
                                            pb: 1,
                                        }}>Last Name</FormLabel>

                                        <TextField placeholder="Last Name" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />

                                    </Box>
                                    
                                </Box>
                                <Box sx={{ display: 'flex', width: '512px', height: '56px', gap: '16px' }}>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="mobileNumber" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A',
                                            pb: 1,
                                        }}>Mobile Number</FormLabel>
                                        <TextField onChange={(e) => handleChange(e, "mobileNumber")} value={mobile} id="mobileNumber" placeholder="Enter mobile number" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="email" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A',
                                            pb: 1,
                                        }}>Email Address</FormLabel>
                                        <TextField type="email" id="email" placeholder="Enter email address" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />
                                    </Box>
                                    
                                </Box>

                                <Box sx={{ width: '512px', height: '56px', gap: '16px', my: 2 }}>
                                   <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                   <FormLabel htmlFor="otp" sx={{
                                        display: 'block',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        color: '#4A4A4A',
                                        pb: 1,
                                    }}>OTP Verification</FormLabel>
{msg && <Typography color="success.main">{msg}</Typography>}
{msgError && <Typography color="error.main">{msgError}</Typography>}                                   </Box>
                                    <TextField type="text" id="otp" value={otp} onChange={(e) => handleChange(e, "otp")} placeholder="Enter OTP" variant="outlined" sx={{ width: '512px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />
                                </Box>

                                <Box sx={{ width: '512px', height: '96px', gap: '16px', my: 2 }}>
                                    <FormLabel htmlFor="familyMembers" sx={{
                                        display: 'block',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        color: '#4A4A4A',
                                        pb: 1,
                                    }}>Address</FormLabel>
                                    <TextField type="text" id="familyMembers" placeholder="Enter family member details" variant="outlined" sx={{ width: '512px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '76px', padding: 0, margin: 0 } }} />
                                </Box>

                                <Button type="submit" sx={{ width: '139px', height: '36px', color: '#FFFFFF', fontSize: '15px', backgroundColor: '#03C136', fontWeight: 'bold', borderRadius: '11px', '&:hover': { backgroundColor: '#02A82A' }, textTransform: 'capitalize', marginTop: 2 }}>Submit & Pay</Button>
                            </form>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default NewPrimeRegistration
