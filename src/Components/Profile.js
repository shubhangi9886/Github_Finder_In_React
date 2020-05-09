import React from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';

function Repos(props) {
  const { profile, repo } = props;
  return (
    <div>
      {profile.map(profile => (
        <Card style={{ width: '250px', marginLeft: '15%', marginTop: '3%' }}>
          <CardContent>
            <img style={{ width: '200px', marginLeft: '5%' }} alt="thumbnail" src={profile.avatar_url} />
            <a href={profile.html_url} style={{ textDecoration: 'none' }}>
              <Button variant="contained" style={{ marginTop: '25px', fontSize: '22', width: '100%' }}>View Profile</Button>
            </a>
            <p style={{ fontSize: "27", color: "#666" }}>{profile.login}</p>
            <hr />
            <br />
            <hr />
            <span style={{ backgroundColor: "#5bc0de", padding: "10px 10px 10px 5px", color: '#fff' }}> {repo.public_repos}Public Repo</span>
            <span style={{ backgroundColor: "#0275d8", padding: "10px 10px 10px 5px", marginLeft: "10px", color: '#fff' }}> {repo.public_gists}Public_Gists</span>
            <br />
            <br />

            <span style={{ backgroundColor: "#d9534f", padding: "10px 15px 10px 15px", color: '#fff' }} >{repo.followers}Followers</span>
            <span style={{ backgroundColor: "#373a3c", padding: "10px 15px 10px 15px", marginLeft: "10px", color: '#fff' }}>{repo.following}Following</span>
          </CardContent>
        </Card>
      ))}

      <div
        style={{ marginLeft: "450px", display: "inline-block", marginTop: "-470px", }}>
        {repo.map((profile) => (
          <Card
            style={{ width: "430px", display: "inline-block", marginLeft: "50px", border: '1px solid black' }}>
            <CardContent>
              <Typography>
                <a href={profile.html_url} style={{ fontSize: "25px", display: "table-cell", }}>
                  {profile.name}</a>
                <p>
                  <a href={profile.html_url} style={{ fontSize: "15px", float: 'left', color: 'black' }} >
                    {profile.full_name}
                  </a>
                </p>

                <p style={{ fontSize: "15px", display: "inline-block", marginRight: '80%', marginTop: '5%' }}>
                  {profile.language}
                </p>
                <div style={{ marginLeft: '50px', marginTop: '-10%' }}>
                  <span style={{ backgroundColor: "#0275d8", padding: "3px 10px 3px 10px", }} >
                    {profile.forks} Fork
                </span>
                  <span style={{ backgroundColor: "#d9534f", padding: "3px 10px 3px 10px", }}>
                    {profile.watchers} Watchers
                </span>
                  <span style={{ backgroundColor: "#4CAF50 ", padding: "3px 10px 3px 10px", }}>
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

export default Repos;