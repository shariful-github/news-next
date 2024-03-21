import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const NavItems = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'Pages',
        pathname: 'pages'
    },
    {
        route: 'Category',
        pathname: 'category'
    },
    {
        route: 'News',
        pathname: 'news'
    },
    {
        route: 'About',
        pathname: 'about'
    },
    {
        route: 'Contact',
        pathname: 'contact'
    }
];

const Footer = () => {
    return (
        <Box className="bg-emerald-500 px-2 py-10">
            <Container>
                <Box className='w-full text-center' direction='row' sx={{ "& svg": { color: "white" } }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {NavItems.map((item) => (
                        <Link key={item.route} href={item.pathname}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography className="w-full text-center" color='darkblue' variant='body2'>
                    © 2024 News Next, BD. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;