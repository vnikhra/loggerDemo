import React from "react";
import {Button, Label, Input, Segment, Grid} from "semantic-ui-react";
import {connect} from "react-redux";

export class ReactComponent extends React.Component{
    render(){
        return(
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Input placeholder='Type Here ...'
                        value={this.props.textValue}
                        onChange={(e, value)=>{
                            this.props.onTextChange(value.value)
                        }}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Button
                            onClick = {this.props.onClick}
                        > Click Here </Button>
                        <Label> {this.props.clicked} </Label>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default connect(
    (state) => {
        return {
            clicked : state.get("clicked"),
            textValue: state.get("textValue")
        }
    },
    (dispatch) => {
        return {
            onClick : () => {
                dispatch({
                    type: "clicked"
                })
            },
            onTextChange: (value) => {
                dispatch({
                    type: "textChanged",
                    value: value
                })
            }
        }
    }
)(ReactComponent)