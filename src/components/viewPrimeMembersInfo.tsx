import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import InfoBox from './PrimeInfoBox'

const ViewPrimeMembersInfo = () => {
    return (
        <section>
            <Container maxWidth="xl">
                <Box sx={{display:"flex", gap:1, py:'25px'}}>
                    <Typography sx={{fontWeight:700, fontSize:"21.5px", lineHeight:"28.6px", color:"#000000CC"}}>Members</Typography>
                    <Typography sx={{fontWeight:700, fontSize:"22px", lineHeight:"29.26px", color:"#000000CC"}}>(21,484)</Typography>
                </Box>
                <Box
                    sx={{ background: "#E1EFEC", width: "100%", height: "122px", mb:3, borderRadius: 5, display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
                    <InfoBox value="21,484" percentage="15%" title="Active Memberships" description="Compared to last year" />

                    <Box sx={{ width: "2px", height: "94px", backgroundColor: "#81C3AF" }} />

                    <InfoBox value="81" percentage="28%" title="New Memberships" description="Compared to last month" />

                    <Box sx={{ width: "2px", height: "94px", backgroundColor: "#81C3AF" }} />

                    <InfoBox value="764" percentage="" title="Expired Memberships" description="Attention needed, send remainder" />

                    <Box sx={{ width: "2px", height: "94px", backgroundColor: "#81C3AF" }} />

                    <InfoBox value="226" percentage="" title="Expiring this month" description="Attention needed, send remainder" />
                </Box>
            </Container>



        </section>
    )
}

export default ViewPrimeMembersInfo
