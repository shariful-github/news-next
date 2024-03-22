import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const LatestNews = ({ news }) => {

    return (
        <div>
            <Card>
                <CardMedia>
                    <Image src={news[0].thumbnail_url} width={800} height={700} alt=''></Image>
                </CardMedia>
                <Button variant="contained" className='bg-rose-500 hover:bg-red-600 mt-3 ml-5 normal-case'>{news[0].category}</Button>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {news[0].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news[0].details}
                    </Typography>
                </CardContent>
            </Card>
            <div className='grid grid-cols-2 gap-5 mt-5'>
                {
                    news.slice(0, 4).map(item =>
                        <Card key={item._id}>
                            <CardMedia>
                                <Image src={item.thumbnail_url} width={800} height={700} alt=''></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.details.length > 200 ?
                                        item.details.slice(0, 200) + '...' :
                                        item.details}
                                </Typography>
                                <div className='text-right'>
                                    <Link href={`/news/${item._id}`}>
                                        <Button variant="contained" className='bg-rose-500 hover:bg-red-600 normal-case'>See Details</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default LatestNews;