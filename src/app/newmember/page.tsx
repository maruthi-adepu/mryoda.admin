import Image from 'next/image'
import React from 'react'
import formImage from '../../../public/images/newregistration.png'
import { Box, Grid, Button, Typography, FormLabel, Grid2, Container } from '@mui/material';

const Page = () => {
    return (
        <>

            <Container maxWidth="xl">
            <Grid container className="">
                <Grid item xs={12} sm={6} md={4} lg={3.2}>
                    <Box className=" h-[492px] rounded-[22px]">
                        <Image src={formImage} alt='' className='h-[492px] w-[372px]' />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Box className="w-[574px] h-[492px] bg-[#FFFFFF] rounded-[22px] p-5">
                        <Typography className='font-bold text-[28px] text-[#515151] mb-7'>New Membership Registration</Typography>
                        <form>
                            <Box className="flex w-[512px] h-[56px] gap-[16px] my-2">
                                <Box className="w-full">
                                    <FormLabel htmlFor="fullName" className="block text-sm font-bold text-gray-700 pb-1">Full Name</FormLabel>
                                    <input type="text" id="fullName" className="w-[248px] h-[36px] bg-[#F7F7F7CC] placeholder:pl-1.5 rounded-[4px] border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter full name' required />
                                </Box>
                                <Box className="w-full">
                                    <FormLabel htmlFor="mobileNumber" className="block text-sm font-bold text-gray-700 pb-1 ">Mobile Number</FormLabel>
                                    <input type="text" id="mobileNumber" className="w-[248px] h-[36px] bg-[#F7F7F7CC] placeholder:pl-1.5 rounded-[4px] border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter mobile number' required />
                                </Box>
                            </Box>

                            <Box className="flex w-[512px] h-[56px] gap-[16px] my-2">
                                <Box className="w-full">
                                    <FormLabel htmlFor="email" className="block text-sm font-bold text-gray-700 pb-1">Email Address</FormLabel>
                                    <input type="email" id="email" className="w-[248px] h-[36px] bg-[#F7F7F7CC] placeholder:pl-1.5 rounded-[4px] border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter email address' required />
                                </Box>
                                <Box className="w-full">
                                    <FormLabel htmlFor="address" className="block text-sm font-bold text-gray-700 pb-1">Address</FormLabel>
                                    <input type="text" id="address" className="w-[248px] h-[36px] bg-[#F7F7F7CC] placeholder:pl-1.5 rounded-[4px] border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter address' required />
                                </Box>
                            </Box>

                            <Box className="w-[512px] h-[56px] gap-[16px] my-2">
                                <FormLabel htmlFor="otp" className="block text-sm font-bold text-gray-700 pb-1">OTP Verification</FormLabel>
                                <input type="text" id="otp" className="w-[512px] h-[36px] rounded-[4px] bg-[#F7F7F7CC] placeholder:pl-1.5 border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter OTP' required />
                            </Box>

                            <Box className="w-[512px] h-[96px] gap-[16px] my-2">
                                <FormLabel htmlFor="familyMembers" className="block text-sm font-bold text-gray-700 pb-1">Add Family Members</FormLabel>
                                <input type="text" id="familyMembers" className="w-[512px] h-[76px] rounded-[4px] bg-[#F7F7F7CC] placeholder:pl-1.5 border border-[#E5E5E5] placeholder:text-[15px] placeholder:text-[#00000029]" placeholder='Enter family member details' />
                            </Box>

                            <button type="submit" className="w-[139px]  text-[#FFFFFF] text-[15px] bg-[#03C136] font-bold py-2 mt-8 rounded-[11px]">Submit & Pay</button>
                        </form>

                    </Box>
                </Grid>
            </Grid>
            </Container>
        </>
    )
}

export default Page
