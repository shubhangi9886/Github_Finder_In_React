import React from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  image: {
    width: '200px',
    marginLeft: '5%'
  },
  button: {
    marginTop: '25px',
    fontSize: '22',
    width: '100%'
  },
  p: {
    fontSize: "27",
  },
  Card: {
    width: "430px",
    display: "inline-block",
    marginLeft: "50px",
    border: '1px solid black'
  },
  span: {
    backgroundColor: "#5bc0de",
    padding: "10px 10px 10px 5px",
    color: '#fff'
  },
  span1: {
    backgroundColor: "#0275d8",
    padding: "10px 10px 10px 5px",
    marginLeft: "10px",
    color: '#fff'
  },
  span2: {
    backgroundColor: "#d9534f",
    padding: "10px 15px 10px 15px",
    color: '#fff'
  },
  span3: {
    backgroundColor: "#373a3c",
    padding: "10px 15px 10px 15px",
    marginLeft: "10px",
    color: '#fff'
  },
  language: {
    fontSize: "15px",
    display: "inline-block",
    marginRight: '80%',
    marginTop: '5%'
  },
  full_name: {
    fontSize: "15px",
    float: 'left',
    color: 'black'
  },
  div: {
    marginLeft: '50px',
    marginTop: '-10%'
  },
  forks: {
    backgroundColor: "#0275d8",
    padding: "3px 10px 3px 10px",
  },
  watchers: {
    backgroundColor: "#d9534f",
    padding: "3px 10px 3px 10px",
  },
  stargazers_count: {
    backgroundColor: "#4CAF50 ",
    padding: "3px 10px 3px 10px",
  }
})


function Repos(props) {
  const { profile, repo } = props;
  const { classes } = props;
  return (
    <div>
      {profile.map(profile => (
        <Card style={{ width: '250px', marginLeft: '15%', marginTop: '3%' }}>
          <CardContent>
            <img style={{ width: '200px', marginLeft: '5%' }} alt="thumbnail" src={profile.avatar_url} />
            <a href={profile.html_url} style={{ textDecoration: 'none' }}>
              <Button className={classes.button} variant="contained">View Profile</Button>
            </a>
            <p className={classes.p}>{profile.login}</p>
            <hr />
            <br />
            <hr />
            <span className={classes.span}> {repo.public_repos}Public Repo</span>
            <span className={classes.span1}> {repo.public_gists}Public_Gists</span>
            <br />
            <br />

            <span className={classes.span2} >{repo.followers}Followers</span>
            <span className={classes.span3}>{repo.following}Following</span>
          </CardContent>
        </Card>
      ))}

      <div
        style={{ marginLeft: "450px", display: "inline-block", marginTop: "-470px", }}>
        {repo.map((profile) => (
          <Card className={classes.Card}>
            <CardContent>
              <Typography>
                <a href={profile.html_url} style={{ fontSize: "25px", display: "table-cell", }}>
                  {profile.name}</a>
                <p>
                  <a href={profile.html_url} className={classes.full_name} >
                    {profile.full_name}
                  </a>
                </p>

                <p className={classes.language}>
                  {profile.language}
                </p>
                <div className={classes.div}>
                  <span className={classes.forks} >
                    {profile.forks} Fork
                </span>
                  <span className={classes.watchers}>
                    {profile.watchers} Watchers
                </span>
                  <span className={classes.stargazers_count}>
                    {profile.stargazers_count} Star
                </span>
                </div>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Repos);