import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import logo from '@/assets/newsnext_header.png';
import Image from 'next/image';
import { getCurrentDate } from '@/utils/getCurrentDate';
import Link from 'next/link';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className='my-5 text-gray-600'>
            <Container>
                <Link href={'/'}>
                    <Image className='mx-auto' src={logo} alt='logo' width={400} height={10}></Image>
                </Link>
                <Typography className="w-full text-center my-2" >
                    Dive into Unadulterated Journalism Here
                </Typography>
                <Typography className="w-full text-center font-semibold" >
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;