import getCategoryNews from '@/utils/getCategoryNews';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ params }) => {

    const categoryNews = await getCategoryNews(params.categoryId);

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                categoryNews.map(news =>
                    <Card key={news.id}>
                        <CardMedia sx={{ "& img": { width: "100%", height: "250px" } }}>
                            <Image src={news.thumbnail_url} alt='news thumbnail' width={500} height={500}></Image>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {news.title}
                            </Typography>
                            <Typography gutterBottom className='my-3'>
                                {news.author.name} - {news.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {news.details.length > 200 ?
                                    news.details.slice(0, 200) + "..." :
                                    news.details}
                            </Typography>
                            <div className='text-right'>
                                <Link href={`/news/${news._id}`}>
                                    <Button variant="contained" className='bg-rose-500 hover:bg-red-600 normal-case'>See Details</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    );
};

export default DynamicNewsPage;