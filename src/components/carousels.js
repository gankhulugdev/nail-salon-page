import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, rem, useMantineTheme } from '@mantine/core';
import gelEx from '../assets/gel-extend.jpg'
import chromNail from '../assets/chrome.jpg'
import Chrome2 from '../assets/Chrome2.png'
import dipManicure from '../assets/dipManicure.jpg'
import softGel from '../assets/softGel.jpg'
import dazzleDry from '../assets/dazzleDry.png'
import noChip from '../assets/noChip.jpg'
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));



function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'No chip lasts longer',
    category: 'manicure',
  },
  {
    image: gelEx,
    title: 'Soft Gel Extension',
    category: 'manicure',
  },
  {
    image: chromNail,
    title: 'Chrome',
    category: 'manicure',
  },
  {
    image: dipManicure,
    title: 'Dipping Powder',
    category: 'manicure',
  },
  {
    image: Chrome2,
    title: 'Chrome',
    category: 'manicure',
  },
  {
    image: dazzleDry,
    title: 'Dazzle Dry Manicure',
    category: 'Nail Polish',
  },
  {
    image: softGel,
    title: 'SoftGel Extension',
    category: 'Manicure',
  },
  {
    image: noChip,
    title: 'No chip',
    category: 'manicure',
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const navigate = useNavigate()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, id) => (
    <Carousel.Slide className='hover:cursor-pointer' onClick={()=>navigate('/service', {state: item.category})} key={id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className='drop-shadow-2xl'>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>

  );
}