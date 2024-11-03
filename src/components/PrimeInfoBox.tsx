import { Box, Typography } from '@mui/material';

type InfoBoxProps = {
    value: string;
    percentage?: string;
    title: string;
    description: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ value, percentage, title, description }) => {
    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, px: 3 }}>
            <Box sx={{ width: "278px", height: "71px" }}>
                {/* First Box: Value and Percentage with SVG */}
                <Box sx={{ width: "185px", display: "flex", alignItems: "center", gap: "11px" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "27px", color: "#000000CC" }}>
                        {value}
                    </Typography>
                    {percentage && (
                        <><Box sx={{gap:0.5, display:"flex", alignItems:"center"}}>

                            <Box>
                                {title === "New Memberships" ? (
                                    /* SVG for the second box (New Signups) */
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.8556" cy="11.25" r="10.3556" fill="#FCE9D2" />
                                        <g clipPath="url(#clip0_40_158)">
                                            <path
                                                d="M11.0678 16.4826L14.3895 12.4683C14.3895 12.4683 14.8931 11.992 14.3468 11.992C13.7986 11.992 12.4752 11.992 12.4752 11.992C12.4752 11.992 12.4752 11.6699 12.4752 11.1775C12.4752 9.76406 12.4752 7.19538 12.4752 6.15037C12.4752 6.15037 12.5492 5.86519 12.1193 5.86519C11.6881 5.86519 9.79312 5.86519 9.4846 5.86519C9.17689 5.86519 9.18333 6.10331 9.18333 6.10331C9.18333 7.12137 9.18333 9.77694 9.18333 11.1421C9.18333 11.5854 9.18333 11.8726 9.18333 11.8726C9.18333 11.8726 8.12263 11.8726 7.45492 11.8726C6.78962 11.8726 7.29081 12.3714 7.29081 12.3714C7.29081 12.3714 10.1165 16.1222 10.5091 16.5164C10.7963 16.8016 11.0678 16.4826 11.0678 16.4826Z"
                                                fill="#FD6206"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_40_158">
                                                <rect width="10.7699" height="10.7699" fill="white" transform="translate(5.4707 5.86505)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ) : (
                                    /* Default SVG for other boxes */
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10.8556" cy="11.25" r="10.3556" fill="#C3FABC" />
                                        <g clipPath="url(#clip0_40_130)">
                                            <path
                                                d="M11.0678 6.01751L14.3895 10.0318C14.3895 10.0318 14.8931 10.5081 14.3468 10.5081C13.7986 10.5081 12.4752 10.5081 12.4752 10.5081C12.4752 10.5081 12.4752 10.8303 12.4752 11.3226C12.4752 12.7361 12.4752 15.3047 12.4752 16.3497C12.4752 16.3497 12.5492 16.6349 12.1193 16.6349C11.6881 16.6349 9.79312 16.6349 9.4846 16.6349C9.17689 16.6349 9.18333 16.3968 9.18333 16.3968C9.18333 15.3788 9.18333 12.7232 9.18333 11.358C9.18333 10.9147 9.18333 10.6275 9.18333 10.6275C9.18333 10.6275 8.12263 10.6275 7.45492 10.6275C6.78962 10.6275 7.29081 10.1288 7.29081 10.1288C7.29081 10.1288 10.1165 6.37791 10.5091 5.98372C10.7963 5.69853 11.0678 6.01751 11.0678 6.01751Z"
                                                fill="#1C8E0C"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_40_130">
                                                <rect width="10.7699" height="10.7699" fill="white" transform="translate(5.4707 5.86505)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}
                            </Box>
                            <Typography sx={{ fontWeight: 700, fontSize: "11.39px", lineHeight: "15.15px", color: title === "New Memberships" ? "#FD6206" : "#1C8E0C" }}>
                                {percentage}
                            </Typography>
                        </Box>
                        </>
                    )}
                </Box>

                {/* Second Box: Title */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "15.9px", lineHeight: "21.15px", color: "#000000CC", mt: 1 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_37_384)">
                            <path d="M7.5 1.31696C3.6402 1.31696 0.5 4.4572 0.5 8.317C0.5 12.1768 3.6402 15.317 7.5 15.317C11.3598 15.317 14.5 12.1768 14.5 8.317C14.5 4.4572 11.3598 1.31696 7.5 1.31696ZM7.5 14.0442C4.34194 14.0442 1.77273 11.475 1.77273 8.317C1.77273 5.15898 4.34194 2.58968 7.5 2.58968C10.6581 2.58968 13.2273 5.15898 13.2273 8.317C13.2273 11.475 10.658 14.0442 7.5 14.0442Z" fill="black" fillOpacity="0.8" />
                            <path d="M7.49993 4.28668C7.03216 4.28668 6.65161 4.66748 6.65161 5.13555C6.65161 5.60319 7.03216 5.98365 7.49993 5.98365C7.9677 5.98365 8.34824 5.60319 8.34824 5.13555C8.34824 4.66748 7.9677 4.28668 7.49993 4.28668Z" fill="black" fillOpacity="0.8" />
                            <path d="M7.50001 7.25635C7.14857 7.25635 6.86365 7.54127 6.86365 7.89271V11.7109C6.86365 12.0623 7.14857 12.3473 7.50001 12.3473C7.85145 12.3473 8.13637 12.0623 8.13637 11.7109V7.89271C8.13637 7.54127 7.85145 7.25635 7.50001 7.25635Z" fill="black" fillOpacity="0.8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_37_384">
                                <rect width="15" height="15" fill="white" transform="translate(0 0.855652)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </Typography>
                </Box>

                {/* Third Box: Description */}
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "20px",
                            color: "#000000CC"
                        }}
                    >
                        {description}
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
};

export default InfoBox;
