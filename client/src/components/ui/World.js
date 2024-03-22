import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const World = ({ news }) => {
    return (
        <div>
            <Card>
                <CardMedia>
                    <Image src={news.thumbnail_url} width={800} height={700} alt=''></Image>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default World;