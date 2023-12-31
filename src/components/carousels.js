import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, rem, useMantineTheme } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

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

export default function CardsCarousel({data}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, id) => (
    <Carousel.Slide className='hover:cursor-pointer' key={id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className='drop-shadow-2xl'>
      <Carousel
      withIndicators
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




