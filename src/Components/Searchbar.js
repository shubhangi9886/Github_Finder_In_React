import React, { Component } from "react";
import Url from "./Url";
import Repo from "./Profile";
import RepoUrl from "./Repo_Url";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    input: {
        width: '50%',
        height: '100',
        marginTop: '10%'
    },
    button: {
        marginTop: '10%',
        width: '7%',
        height: '55px',
        marginLeft: '1%'
    }
})

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            repos: '',
            Text: ''
        }
    }

    handleChange = (event) => {
        const rege = /^[0-9a-zA-Z]+$/;

        if (event.target.value === '' || rege.test(event.target.value)) {
            this.setState({ Text: event.target.value })
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const response = await Url.get('users', {
            params: {
                q: this.state.Text,
            },
        });

        const response1 = await RepoUrl.get(`/${this.state.Text}/repos`);
        console.log(response1)
        this.setState({ profile: response.data.items, repo: response1.data });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField className={classes.input} id="outlined-basic" label="Enter Your Github Username" variant="outlined" onChange={this.handleChange} />
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit} disabled={!this.state.Text}>Submit</Button>
                </form>
                {this.state.profile !== '' && (<Repo {...this.state} />)}
            </div>
        )
    }
}

export default withStyles(styles)(SearchBar);
