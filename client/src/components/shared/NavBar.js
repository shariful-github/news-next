"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/news_next.png'
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

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
        pathname: 'categories/all-news'
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
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {

    return (
        <AppBar position="static" className='bg-emerald-500'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href={'/'}>
                        <Image src={logo} alt='logo' className='w-28'></Image>
                    </Link>

                    <Box className="w-full text-center">
                        {NavItems.map((item) => (
                            <Link key={item.route} href={`/${item.pathname}`}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction='row' sx={{ "& svg": { color: "white" } }}>
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
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;