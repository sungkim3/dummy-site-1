import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '56px',
        paddingBottom: '30px',
        backgroundColor: 'aliceblue'
    },
    title: {
        paddingTop: '50px',
    }
}))

export default function Introduction() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth='sm'>
                <Typography className={classes.title} align='center' color='primary' variant='h4'>Astrid & Lagertha</Typography>
                <Typography align='center' color='inherit' variant='subtitle2'>An Appreciation Image Gallery of Two English Mastiffs</Typography>
            </Container>
        </div>
    )
}