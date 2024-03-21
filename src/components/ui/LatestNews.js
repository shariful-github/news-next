import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import bitcoin from '@/assets/bitcoin1.jpg';
import Image from 'next/image';
const LatestNews = () => {
    return (
        <div>
            <Card>
                {/* <CardActionArea> */}
                <CardMedia>
                    <Image src={bitcoin} alt=''></Image>
                </CardMedia>
                <Button variant="contained" className='bg-rose-500 hover:bg-red-600 mt-3 ml-5 normal-case'>Technology</Button>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cryptocurrency Price on March 20: Bitcoin tumbles 6% to below $61,000 ahead of Fed meet outcome
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bitcoin fell 6.4% to $60,969 on Wednesday, hitting its two-week low ahead of the Federal Reserve's policy decision and commentary later in the day. Concurrently, Ethereum, the second-largest cryptocurrency, also saw a decline of 9%, falling to $3,075.
                    </Typography>
                </CardContent>
                {/* </CardActionArea> */}
            </Card>
            <div className='grid grid-cols-2 gap-5 mt-5'>
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={bitcoin} alt=''></Image>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom>
                                Cryptocurrency Price on March 20: Bitcoin tumbles 6% to below $61,000 ahead of Fed meet outcome
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Bitcoin fell 6.4% to $60,969 on Wednesday, hitting its two-week low ahead of the Federal Reserve's policy decision and commentary later in the day. Concurrently, Ethereum, the second-largest cryptocurrency, also saw a decline of 9%, falling to $3,075.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={bitcoin} alt=''></Image>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom>
                                Cryptocurrency Price on March 20: Bitcoin tumbles 6% to below $61,000 ahead of Fed meet outcome
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Bitcoin fell 6.4% to $60,969 on Wednesday, hitting its two-week low ahead of the Federal Reserve's policy decision and commentary later in the day. Concurrently, Ethereum, the second-largest cryptocurrency, also saw a decline of 9%, falling to $3,075.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default LatestNews;