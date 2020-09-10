import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Card from './Card'
const Experience = () => {
  const workHistory = [
    {
      organization: 'Doncaster BMW',
      yearStart: 2017,
      yearEnd: 2020,
      title: 'Senior sale Consultant',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
    {
      organization: 'Camberwell Toyota',
      yearStart: 2016,
      yearEnd: 2017,
      title: 'Sales Consultant',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
    {
      organization: 'Lexus',
      yearStart: 2016,
      yearEnd: 2016,
      title: 'Cadet',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
    {
      organization: 'Freyville',
      yearStart: 2016,
      yearEnd: 2017,
      title: 'Sales',
      detail:
        'Meet Sales TargetResponsible for delivery Making follow- up phone calls Assist in selling after - marketing products and finance Support other departments in demand Perform general administrative duties and day - to - day office tasks',
    },
  ]

  return (
    <section className="experience-page">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item container className="page__header">
          <Typography variant="h2">Experience</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          className="page__content"
          justify="center"
        >
          {workHistory.map((data, index) => (
            <Grid key={index} xs={12} item>
              <Card data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Experience
