import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme, rem } from '@mantine/core';
import gelEx from '../assets/gel-extend.jpg'
import chromNail from '../assets/chrome.jpg'
import funny from '../assets/funny.jpg'

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
    image:
      'https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
    title: 'Nail design',
    category: 'manicure',
  },
  {
    image:
      'https://img.freepik.com/free-photo/pedicurist-master-makes-pedicure-woman-s-legs-spa-treatment-concept_186202-7772.jpg?w=900&t=st=1692563870~exp=1692564470~hmac=69c9a0892e9b22d6786a2c1579256bce164eb45a7ca29f1dcecbbb13ea2e08da',
    title: 'Pedicure',
    category: 'pedicure',
  },
  // {
  //   image: funny,
  //   title: 'Funny-Bunny OPI',
  //   category: 'manicure',
  // },
];

export default function CardsCarousel() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}