import React from 'react'
import { Grid, Typography, Icon, makeStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { loadCSS } from 'fg-loadcss'

const useStyles = makeStyles((theme) => ({
  icon: {
    '& > .fab': {
      margin: theme.spacing(1),
    },
  },
  swiper: {
    flexGrow: 1,
  },
}))

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Home = () => {
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

  const personalDetail = {
    Residence: 'Australian',
    Address: 'Glen Waverley',
    Email: 'archerjessieliu@gmail.com',
    Phone: '0426356065',
  }

  const steps = [
    {
      title: 'Front End Developer',
    },
    {
      title: 'Full-stack Software Engineer',
    },
  ]

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <section className="homepage">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container direction="row-reverse" className="page__header">
          <Grid item md={8} className="homepage__title">
            <Typography variant="h2" className="homepage__name">
              Jessie Liu
            </Typography>
            <div className={classes.swiper}>
              <AutoPlaySwipeableViews
                axis="x"
                index={activeStep}
                onChangeIndex={handleStepChange}
              >
                {steps.map((step, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? step.title : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </div>
            <div className={classes.icon}>
              <Icon className="fab fa-twitter"></Icon>
              <Icon className="fab fa-facebook"></Icon>
              <Icon className="fab fa-instagram"></Icon>
            </div>
          </Grid>
          <Grid item md={4} className="homepage__avatar">
            <img src="/img/jessie.jpeg" alt="Profile Avatar" />
          </Grid>
        </Grid>
        <Grid item container className="page__content">
          <Grid item xs={12} md={7} className="aboutme">
            <Typography variant="h4" className="aboutme__title">
              About Me
            </Typography>
            <Typography paragraph className="aboutme__title">
              Bright and optimistic, Tifa always cheers up the others when
              they're down. But don't let her looks fool you, she can decimate
              almost any enemy with her fists.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="personal__detail">
            <ul>
              {Object.keys(personalDetail).map((item, index) => (
                <li key={index}>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      {item} :
                    </Grid>
                    <Grid item xs={8}>
                      {personalDetail[item]}
                    </Grid>
                  </Grid>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
