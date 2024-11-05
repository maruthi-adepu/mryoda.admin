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
    { title: 'Active Memberships', value: '21,484', percentage: '+15%',content:'Compared to last year', color: '#F9F4A0'},
    { title: 'New Memberships', value: '81', percentage: '+28%',content:'Compared to last month', color: '#B0E0E4'},
    { title: 'Expired Memberships', value: '764', percentage: '+8%',content:'Attention needed, send remainder', color: '#FCDDE3'},
    { title: 'Expiring this month', value: '226', percentage: '+8%',content:'Attention needed, send remainder', color: '#c9f5ba'},
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
                        <Grid item xs={12} sm={6} md={3} lg={3} key={index} sx={{ padding: '0 8px', paddingLeft:0 }}>
                            <Card sx={{backgroundColor: card.color, boxShadow: 'none', border: "#FFFFFF", borderRadius: "8px", paddingLeft:0, marginBottom:2 }}>
                                <CardContent>
                                    <Box className="flex justify-between">
                                        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 400, color: '#000000CC', fontSize: '17px' }}>
                                            {card.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" className='cursor-pointer'>
                                            <MoreHorizIcon />
                                        </Typography>
                                    </Box>
                                    
                                    <Typography variant="body2" sx={{ color: 'text.secondary'}} style={{ fontWeight: 700, color: '#000000CC', fontSize: '34px' }}>
                                        {card.value}
                                    </Typography>
                                    
                                </CardContent>
                                <CardActions sx={{ marginTop: -3, padding: 0, marginBottom: 1, display:"flex", flexDirection:"column",alignItems:"self-start" }}>
                                    <Button sx={{ fontWeight: 400, color: '#000000CC', fontSize: '13px', marginLeft: '0px', paddingLeft: "0px" }}>{card.percentage}</Button>
                                    <Typography variant="caption" sx={{ color: 'text.secondary'}} style={{color: '#000000CC', fontSize: '14px',paddingBottom:"10px",paddingLeft:"4px" }}>
                                        {card.content}
                                    </Typography>
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