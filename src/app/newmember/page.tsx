import Image from 'next/image'
import React from 'react'
import formImage from '../../../public/images/newregistration.png'
import { Box, Grid, Button, Typography, FormLabel, Grid2, Container, TextField } from '@mui/material';

const Page = () => {
    return (
        <>

            <Container maxWidth="xl">
                <Grid container>
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
                                marginTop:-2,
                                marginBottom:4                           }}>New Membership Registration</Typography>
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
                                        }}>Full Name</FormLabel> 
{/* <TextField placeholder="Enter full name" InputProps={{
    style: {width:'248px', height: '36px',padding:0,margin:0 , background:'#F7F7F7CC' ,border:'2px solid #E5E5E5' }, // Set desired height
  }}/> */}
<TextField placeholder="Enter full name" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />

</Box>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="mobileNumber" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A', 
                                            pb: 1, 
                                        }}>Mobile Number</FormLabel>
<TextField id="mobileNumber" placeholder="Enter mobile number" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }} />
</Box>
                                </Box>

                                <Box sx={{ display: 'flex', width: '512px', height: '56px', gap: '16px' }}>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="email" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A', 
                                            pb: 1, 
                                        }}>Email Address</FormLabel>
<TextField type="email" id="email" placeholder="Enter email address" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }}  />
</Box>
                                    <Box sx={{ width: '100%' }}>
                                        <FormLabel htmlFor="address" sx={{
                                            display: 'block',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            color: '#4A4A4A', 
                                            pb: 1, 
                                        }}>Address</FormLabel>
<TextField type="text" id="address" placeholder="Enter address" variant="outlined" sx={{ width: '248px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }}  />
</Box>
                                </Box>

                                <Box sx={{ width: '512px', height: '56px', gap: '16px', my: 2 }}>
                                    <FormLabel htmlFor="otp" sx={{
                                        display: 'block',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        color: '#4A4A4A', 
                                        pb: 1, 
                                    }}>OTP Verification</FormLabel>
<TextField type="text" id="otp" placeholder="Enter OTP" variant="outlined" sx={{ width: '512px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '36px', padding: 0, margin: 0 } }}  />
</Box>

                                <Box sx={{ width: '512px', height: '96px', gap: '16px', my: 2 }}>
                                    <FormLabel htmlFor="familyMembers" sx={{
                                        display: 'block',
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        color: '#4A4A4A', 
                                        pb: 1, 
                                    }}>Add Family Members</FormLabel>
<TextField type="text" id="familyMembers" placeholder="Enter family member details"  variant="outlined" sx={{ width: '512px', background: '#F7F7F7CC', '& .MuiOutlinedInput-root': { '& fieldset': { borderWidth: '2px', borderColor: '#E5E5E5' }, '&:hover fieldset': { borderColor: '#E5E5E5' }, '&.Mui-focused fieldset': { borderColor: '#E5E5E5' } } }} InputProps={{ style: { height: '76px', padding: 0, margin: 0 } }}  />
</Box>

                                <Button type="submit" sx={{ width: '139px',height:'36px', color: '#FFFFFF', fontSize: '15px', backgroundColor: '#03C136', fontWeight: 'bold',  borderRadius: '11px', '&:hover': { backgroundColor: '#02A82A' } ,textTransform:'capitalize',marginTop:2}}>Submit & Pay</Button>
                                </form>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Page
