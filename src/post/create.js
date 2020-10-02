import React, { Component }  from 'react';
import {CreateContainer, CreateForm, CreateFormLabel, CreateFormSelect, CreateFormInput, CreateButton} from "./createStyled.js";
import Skeleton from '../posts/skeleton.js';
import { connect } from "react-redux";

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const time = new Date();
const date = time.getDate() + " " + month[time.getMonth()];

    const mapState = (state) => {
      return {
        existAccount: state.existAccount,
      };
    };

    const mapDispatch = (dispatch) => {
      return {
        addNewPost: (newPost) =>
          dispatch({
            type: "ADD_POST",
            newPost: { ...newPost },
          }),
      };
    };

class Create extends Component {
    state = {
        photos: this.props.existAccount[0].photos,
        names: this.props.existAccount[0].names,
        nicknames: this.props.existAccount[0].nicknames,
        dates: date,
        contents: "",
        images: "",
    };

    changeText = (event) => {
        this.setState({ contents: event.target.value });
        };

    urlImages = (event) => {
        this.setState({ images: event.target.value });
        };

    setTwit = (event) => {
        const twit = this.props.existAccount.filter(
            (twit) => twit.names === event.target.value
            )[0];
            this.setState({
                names: event.target.value,
                nicknames: twit.nicknames,
                photos: twit.photos,
                });
        };

    addNewPost = (event) => {
        this.props.addNewPost(this.state);
            event.target.value = ""
        this.setState({ contents: "", images: "" });
        };

    render() {
        return (
            <CreateContainer>
                <CreateForm>
                    <CreateFormLabel>
                        Select account:
                        <CreateFormSelect
                        onChange={this.setTwit}
                        selected={this.props.existAccount[0].name}
                        >
                        {this.props.existAccount.map((twit) => ( <option>{twit.names}</option> ))}
                         </CreateFormSelect>
                    </CreateFormLabel>
                        <CreateFormLabel>
                            <CreateFormInput
                                type="text"
                                value={this.contents}
                                onChange={this.changeText}
                                placeholder="Input text"
                            >
                            </CreateFormInput>
                        </CreateFormLabel>
                            <CreateFormLabel>
                                <CreateFormInput
                                    type="text"
                                    value={this.images}
                                    onChange={this.urlImages}
                                    placeholder="Input URL images"
                                >
                                </CreateFormInput>
                            </CreateFormLabel>
                </CreateForm>
                    <div>
                        <CreateButton type="submit"
                            onClick={this.addNewPost}
                        > ADD
                        </CreateButton>
                    </div>
                {this.props.existAccount.map((skeleton) => {
                    return (
                        <Skeleton
                            photo={skeleton.photos}
                            name={skeleton.names}
                            nickname={skeleton.nicknames}
                            date={skeleton.dates}
                            content={skeleton.contents}
                            image={skeleton.images}
                        />
                    );
                })}
            </CreateContainer>
        );
    }
}

export default connect(mapState, mapDispatch)(Create);