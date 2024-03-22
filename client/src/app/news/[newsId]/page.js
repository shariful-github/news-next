import getNewsById from "@/utils/getNewsById";
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsDetails = async ({ params }) => {
    const news = await getNewsById(params.newsId);

    return (
        <div className="grid grid-cols-2 my-8 gap-8 px-28">
            <div>
                <Image src={news.thumbnail_url} alt="news thumbnail" width={800} height={600}></Image>
                <div className="gap-5 flex my-5">
                    <div>
                        <Image src={news.image_url} alt="news thumbnail" width={800} height={600}></Image>
                    </div>
                    <div>
                        <Image src={news.image_url} alt="news thumbnail" width={800} height={600}></Image>
                    </div>
                </div>
            </div>
            <div>

                <Typography gutterBottom variant="h5" component="div">
                    {news.title}
                </Typography>
                <div className="flex items-center gap-5">
                    <Avatar alt="Remy Sharp" src={news.author.img} />
                    <Typography gutterBottom className='my-3'>
                        by {news.author.name} - {news.author.published_date}
                    </Typography>
                </div>
                <Typography className="whitespace-pre-line mt-5" variant="body2" color="text.secondary">
                    {news.details}
                </Typography>
            </div>
        </div>
    );
};

export default NewsDetails;