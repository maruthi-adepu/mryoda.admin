'use client'
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import img from '../../public/images/newregistration.png'
import TopBar from '@/components/topbar';
import { useRouter } from 'next/navigation';




const cardStyles = {
  width: "198px",
  height: "128px",
  padding: "11px 22px",
  borderRadius: "22px",
  border: "1px solid #B2955E",
background: "linear-gradient(45deg, rgba(255, 255, 255, 0.00) 51.95%, rgba(255, 239, 203, 0.50) 48.96%), linear-gradient(270deg, #F4E772 0%, #DDAF1B 34.54%, #FDF683 66.38%, #F0CE50 100%)"
};

const textStyles = {
  fontWeight: 400,
  color: "#392500",
  lineHeight: "24px",
  fontSize: "17px",
  marginY: 1,
};

const valueStyles = {
  fontWeight: 700,
  fontSize: "34px",
  lineHeight: "40px",
  width: "154.67px",
  height: "40px",
  color: "#392500",
};

const SecondCardData = [
  { title: "Total Cashback Earned", value: "₹150" },
  { title: "Cashback Used", value: "₹20" },
  { title: "Remaining Cashback Balance", value: "₹500" },
];

const FirstCardData = [
  { label: "Member Name", value: "Srinivasulu Venkata Ramana Reddy" },
  { label: "Membership ID", value: "YODA123456" },
  { label: "Membership Status", value: "Active" },
  { label: "Cashback Balance", value: "₹500" },
  { label: "Start Date", value: "01/01/2023" },
  { label: "Expiry Date", value: "01/01/2024" },
];



const ViewMemberDetails = () => {

  const router = useRouter();

  return (
    <section>
      <TopBar />





      <Container maxWidth="xl">

        <Box sx={{ display: "flex", gap: "22px", alignItems: "center", marginY: 2 }}>
          <Box><svg onClick={() => { router?.push("/newmember") }} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35.5" y="0.5" width="35" height="35" rx="10.5" transform="rotate(90 35.5 0.5)" stroke="#7C7C7C" />
            <path d="M13 18C13 17.6856 13.12 17.3712 13.3596 17.1315L20.9028 9.58839C21.3826 9.10856 22.1606 9.10856 22.6403 9.58839C23.1199 10.068 23.1199 10.8459 22.6403 11.3257L15.9657 18L22.64 24.6742C23.1197 25.1541 23.1197 25.9318 22.64 26.4114C22.1604 26.8915 21.3824 26.8915 20.9026 26.4114L13.3594 18.8684C13.1198 18.6286 13 18.3143 13 18Z" fill="black" fillOpacity="0.5" />
          </svg>
          </Box>
          <Typography sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#000000CC" }}>Members</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginY: 1 }}>
          <Box>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3332 14V12.6667C13.3332 11.9594 13.0522 11.2811 12.5521 10.781C12.052 10.281 11.3737 10 10.6665 10H5.33317C4.62593 10 3.94765 10.281 3.44755 10.781C2.94746 11.2811 2.6665 11.9594 2.6665 12.6667V14" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.00016 7.33333C9.47292 7.33333 10.6668 6.13943 10.6668 4.66667C10.6668 3.19391 9.47292 2 8.00016 2C6.5274 2 5.3335 3.19391 5.3335 4.66667C5.3335 6.13943 6.5274 7.33333 8.00016 7.33333Z" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
          <Typography sx={{fontWeight: 400, fontSize: "15px", lineHeight: "20px", color:"#00000080"}}>Members</Typography>
          <Box><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_48_4212)">
              <path d="M10.7402 8.00004C10.7402 8.25095 10.6444 8.50182 10.4532 8.69312L4.43341 14.7128C4.05048 15.0957 3.42962 15.0957 3.04685 14.7128C2.66407 14.33 2.66407 13.7093 3.04685 13.3263L8.37345 8.00004L3.04703 2.67371C2.66426 2.29078 2.66426 1.67011 3.04703 1.28737C3.42981 0.904252 4.05066 0.904252 4.4336 1.28737L10.4533 7.30696C10.6446 7.49835 10.7402 7.74922 10.7402 8.00004Z" fill="black" fillOpacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_48_4212">
                <rect width="15" height="14" fill="white" transform="matrix(0 -1 1 0 0 15.5)" />
              </clipPath>
            </defs>
          </svg>
          </Box>
          {/* Need to change dynamic user name */}
          <Typography sx={{fontWeight: 400, fontSize: "15px", lineHeight: "20px", color:"#00000080"}}>Srinivasulu Venkata Ramana Reddy  </Typography> 
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Grid container marginBottom={3} marginTop={2}  spacing={2}>
          
            <Grid container item spacing={2}>
              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Box sx={{ boxShadow: "0px 1px 1px 0px #CEDBD8", background: "#E1EFEC", width: "100%", height: "52px", display: "flex", gap: 2, paddingLeft: 3, alignItems: "center" }}>
                  <Typography>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.4" cy="15.4" r="15.05" stroke="#03C136" strokeWidth="0.7" />
                      <path d="M19.3713 22.1H11.311V19.8783H13.9504V11.9425L11.2399 12.529V10.254L16.7497 9.14314V19.8783H19.3713V22.1Z" fill="black" fillOpacity="0.8" />
                    </svg>
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "24px", color: "#000000CC" }} variant="h6">
                    Member Details
                  </Typography>
                </Box>
                <Container maxWidth="xl">
                <Box sx={{ background: "#0C4433", gap: "20px", width: "100%", minHeight: "460px", padding: "22px 47px", borderRadius: "33px", mt:3, }}>

                  <Box
                    sx={{
                      width: "122px",
                      height: "122px",
                      borderRadius: "50%",
                      background: "linear-gradient(90deg, #DDA517 0%, #FBC926 17%, #FFE89B 37%, #FBC926 57%, #FBC926 79%, #CDA349 100%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative"
                    }}
                  >
                    <Box
                      sx={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative"
                      }}
                    >
                      <Image
                        src={img}
                        alt=""
                        className='w-full h-full object-cover'
                        style={{border: "3px solid #0c4433",borderRadius: "50%"}}
                      />
                    </Box>
                    <Box sx={{ position: "absolute", top: "1px", left: "80%", transform: "translateX(-50%)", zIndex: 1 }}>
                      <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.943 33.9685L22.9645 24.5097L32.1448 19.3361C32.6724 19.0392 33 18.4692 33 17.8498C33 17.2308 32.6724 16.6608 32.1448 16.3634L22.9645 11.1902L17.943 1.73144C17.6544 1.18792 17.1011 0.849976 16.5002 0.849976C15.8989 0.849976 15.3456 1.18792 15.0574 1.73144L10.036 11.1902L0.855246 16.3639C0.328051 16.6608 0 17.2308 0 17.8502C0 18.4692 0.328051 19.0392 0.855246 19.3365L10.036 24.5097L15.0574 33.9685C15.3456 34.512 15.8989 34.85 16.5002 34.85C17.1015 34.85 17.6544 34.512 17.943 33.9685Z" fill="#03C136" />
                      </svg>
                    </Box>
                  </Box>
                  <Table sx={{ minWidth: 250,mt:2 }} aria-label="simple table">
                    <TableBody>
                      {FirstCardData?.map((item, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ padding: 0, fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF", border: 'none',minWidth:"160px" }}
                          >
                            {item?.label}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ padding: 0, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF", paddingY: 0.8, border: 'none' }}
                          >
                            {item.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Box sx={{ display: "flex", gap: 3, marginTop: 2 }}>
                    <Button sx={{ border: "1px solid #03C136", display: "flex", alignItems: "center", borderRadius: "22px", paddingX: 2, gap: "10px",textTransform: "capitalize" }}>
                      <Box>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 3.79998C17.2626 3.53734 17.5744 3.329 17.9176 3.18686C18.2608 3.04472 18.6286 2.97156 19 2.97156C19.3714 2.97156 19.7392 3.04472 20.0824 3.18686C20.4256 3.329 20.7374 3.53734 21 3.79998C21.2626 4.06263 21.471 4.37443 21.6131 4.71759C21.7553 5.06075 21.8284 5.42855 21.8284 5.79998C21.8284 6.17142 21.7553 6.53922 21.6131 6.88238C21.471 7.22554 21.2626 7.53734 21 7.79998L7.5 21.3L2 22.8L3.5 17.3L17 3.79998Z" stroke="#03C136" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Box>
                      <Box sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: "15px", lineHeight: "20px" }}>Edit Member Info</Box>
                    </Button>
                    <Button sx={{ background: "#03C136", borderRadius: "22px", padding: "22px", gap: "10px", textTransform: "capitalize" }}><Typography sx={{ fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF" }}>Renew Membership</Typography> </Button>
                  </Box>
                </Box></Container>
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={6}>
                <Box sx={{ boxShadow: "0px 1px 1px 0px #CEDBD8", background: "#E1EFEC", height: "52px", display: "flex", gap: 2, paddingLeft: 3, alignItems: "center" }}>
                  <Typography>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15.4" cy="15.4" r="15.05" stroke="#03C136" strokeWidth="0.7" />
                      <path d="M13.9859 19.7183V19.7717H19.158V22.1H10.7689V19.9138L14.4214 16.4214C15.156 15.7163 15.6715 15.1269 15.9677 14.6529C16.2698 14.173 16.4209 13.6694 16.4209 13.1422C16.4209 11.9691 15.7899 11.3826 14.528 11.3826C13.432 11.3826 12.3834 11.818 11.3821 12.6889V10.2184C12.49 9.50157 13.7401 9.14314 15.1323 9.14314C16.4357 9.14314 17.4518 9.47195 18.1805 10.1296C18.9151 10.7813 19.2824 11.664 19.2824 12.7778C19.2824 14.2649 18.3908 15.8023 16.6075 17.39L13.9859 19.7183Z" fill="black" fillOpacity="0.8" />
                    </svg>
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "24px", color: "#000000CC" }} variant="h6">
                    Cashback Details
                  </Typography>
                </Box>
                
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ background: "#0C4433", gap: "20px", width: "100%", minHeight: "460px", padding: "32px 0px", borderRadius: "33px", display: "flex", flexDirection: "column", mt:3, }}>
                  <Box sx={{ display: "flex", gap: "20px",padding: "0px 32px" }}>
                    {SecondCardData?.map((item, index) => (
                      <Box key={index} sx={cardStyles}>
                        <Typography sx={textStyles} className='truncate'>{item?.title}</Typography>
                        <Typography sx={valueStyles}>{item?.value}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ background: "#00291C", padding: "11px 45px",mt:1}}>
                    <Typography sx={{ color: "#F0DC61CC", fontWeight: 700, fontSize: "20px", lineHeight: "24px" }}>Recent Transactions</Typography>
                  </Box>
                  <Box sx={{padding: "0px 45px"}}>
                    <Typography sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF", paddingY: 1.5 }}>01/02/2023: Diagnostics, ₹2000, ₹500 Discount, ₹100 Cashback</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF", paddingY: 1.5 }}>15/02/2023: Pharmacy, ₹500, ₹100 Discount, ₹50 Cashback</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF", paddingY: 1.5 }}>01/02/2023: Diagnostics, ₹2000, ₹500 Discount, ₹100 Cashback</Typography>

                    <Box sx={{ borderBottom: "1px solid #FFFFFF", display: "inline-block", marginBottom: "10px", }}>
                      <Typography sx={{ fontWeight: 700, color: "#FFFFFF", lineHeight: "20px", fontSize: "15px", }}>
                        View Full Cashback History
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              </Grid>
            </Grid>
        </Grid>
        <Box>
          <Box sx={{ background: "#E1EFEC", boxShadow: "0px 1px 1px 0px rgba(206, 219, 216, 1)", height: "52px", width: "100%", padding: "11px 47px", gap: "10px", marginTop: 2 }}>
            <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.4" cy="16.2" r="15.05" stroke="#03C136" strokeWidth="0.7" />
                <path d="M11.1066 22.4823V20.0385C11.9598 20.6606 12.9551 20.9716 14.0926 20.9716C14.8094 20.9716 15.3663 20.8176 15.7633 20.5095C16.1661 20.2014 16.3676 19.7719 16.3676 19.2209C16.3676 18.6522 16.1187 18.2138 15.6211 17.9057C15.1294 17.5976 14.451 17.4436 13.586 17.4436H12.4396V15.293H13.4972C15.156 15.293 15.9854 14.742 15.9854 13.6401C15.9854 12.6033 15.3486 12.0849 14.0748 12.0849C13.2217 12.0849 12.3923 12.3604 11.5865 12.9114V10.6186C12.4811 10.1683 13.5238 9.94319 14.7146 9.94319C16.018 9.94319 17.0311 10.2365 17.7539 10.823C18.4826 11.4095 18.847 12.1708 18.847 13.1069C18.847 14.7716 18.0027 15.8143 16.3143 16.235V16.2794C17.2148 16.392 17.9257 16.7208 18.4471 17.2658C18.9684 17.805 19.2291 18.4685 19.2291 19.2565C19.2291 20.4473 18.7937 21.3893 17.9228 22.0824C17.0519 22.7756 15.8492 23.1222 14.3147 23.1222C12.9995 23.1222 11.9301 22.9089 11.1066 22.4823Z" fill="black" fillOpacity="0.8" />
              </svg>
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "24px", color: "#000000CC" }}>Family Members</Typography>
            </Container>
          </Box>
        </Box>
        </Container>

      <Container maxWidth="xl" sx={{ marginBottom: 4 }}>
        <Box maxWidth="300px" marginY={3}>
          <Table >
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}>
                <TableCell component="th" scope="row" sx={{ padding: 0, fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#000000CC", border: 'none' }}> Mother</TableCell>
                <TableCell align="left" sx={{ padding: 0, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "#000000CC", paddingY: 1, border: 'none' }}>Lakshmi </TableCell>
              </TableRow>

              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}>
                <TableCell component="th" scope="row" sx={{ padding: 0, fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#000000CC", border: 'none' }}> Son</TableCell>
                <TableCell align="left" sx={{ padding: 0, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "#000000CC", paddingY: 1, border: 'none' }}>Raju </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>


        <Box sx={{ display: "flex", gap: 3, marginTop: 2 }}>
          <Button sx={{ border: "1px solid #03C136", textTransform: "capitalize", display: "flex", alignItems: "center", borderRadius: "22px", paddingX: 2, gap: "10px"}}>
            <Box>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 3.68335V13.0167" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.83301 8.34998H13.1663" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Box>
            <Box sx={{ color: "#000000CC", fontWeight: 400, fontSize: "15px", lineHeight: "20px" }}>Add Family Member</Box>
          </Button>
          <Box>
            <Button sx={{ background: "#03C136", borderRadius: "22px", padding: "22px", gap: "10px", width: "224px", height: "55px", textTransform: "capitalize" }}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 3.60003C17.7626 3.33739 18.0744 3.12905 18.4176 2.98691C18.7608 2.84477 19.1286 2.77161 19.5 2.77161C19.8714 2.77161 20.2392 2.84477 20.5824 2.98691C20.9256 3.12905 21.2374 3.33739 21.5 3.60003C21.7626 3.86268 21.971 4.17448 22.1131 4.51764C22.2553 4.8608 22.3284 5.2286 22.3284 5.60003C22.3284 5.97147 22.2553 6.33927 22.1131 6.68243C21.971 7.02559 21.7626 7.33739 21.5 7.60003L8 21.1L2.5 22.6L4 17.1L17.5 3.60003Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <Typography sx={{ fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "#FFFFFF" }}>Edit Family Member</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </section >
  )
}

export default ViewMemberDetails