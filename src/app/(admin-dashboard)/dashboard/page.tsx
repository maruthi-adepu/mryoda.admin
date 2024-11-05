import { Box, Container, Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TopBar from '@/components/topbar';
import ViewMemberDetails from '@/components/viewMember';

const cardData = [
    { title: 'Active Members', value: '1,234', percentage: '+5%', color: '#F9F4A0'},
    { title: 'Expiring Memberships', value: '56', percentage: '+2%', color: '#B0E0E4'},
    { title: 'Transactions', value: '789', percentage: '+8%', color: '#FCDDE3'},
];

const page = () => {

    return (
        <>
            <section className='grid gap-[16px] bg-[#FFFFFF]'>

                <Container maxWidth="xl">
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: '#000000CC', fontSize: '20px', paddingY:2 }}

                    >
                        Key Statistics
                    </Typography>
                    <Grid container spacing={2} sx={{  justifyContent: 'center' }}>
                    {cardData?.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} lg={4} key={index} sx={{ padding: '0 8px', paddingLeft:0 }}>
                            <Card sx={{ maxWidth: 434, maxHeight: 148, backgroundColor: card.color, boxShadow: 'none', border: "#FFFFFF", borderRadius: "8px", paddingLeft:0, marginBottom:2 }}>
                                <CardContent>
                                    <Box className="flex justify-between">
                                        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 400, color: '#000000CC', fontSize: '17px' }}>
                                            {card.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" className='cursor-pointer'>
                                            <MoreHorizIcon />
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop:-2 }} style={{ fontWeight: 700, color: '#000000CC', fontSize: '34px' }}>
                                        {card.value}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ marginTop: -3, padding: 0, marginBottom: 1 }}>
                                    <Button sx={{ fontWeight: 400, color: '#000000CC', fontSize: '13px', marginLeft: '0px', paddingLeft: "0px" }}>{card.percentage}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                </Container>
              
            </section>
            {/* <ViewMemberDetails /> */}
        </>
    )
}

export default page