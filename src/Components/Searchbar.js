import React, { Component } from "react";
import Url from "./Url";
import Repo from "./Profile";
import RepoUrl from "./Repo_Url";
import { TextField, Paper } from "@material-ui/core";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            profile: '',
            repos: '',
        }
    }
    handleChange = (event) => this.setState({ query: event.target.value })

    handleSubmit = async event => {
        event.preventDefault();
        const response = await Url.get('users', {
            params: {
                q: this.state.query,
            },
        });

        const response1 = await RepoUrl.get(`/${this.state.query}/repos`);
        console.log(response1)
        this.setState({ profile: response.data.items, repo: response1.data });
    };

    render() {
        return (
            <div>
                <Paper elevation={6} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            label="Search Your Github UserName..." onChange={this.handleChange} />
                    </form>

                </Paper>
                {this.state.profile !== '' && (<Repo {...this.state} />)}
            </div>  

        )
    }
}
export default SearchBar;