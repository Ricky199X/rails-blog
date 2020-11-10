import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


class CommentForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            commenter: '',
            body: ''
        }
    }


    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Commenter</Form.Label>
                    <Form.Control type="commenter" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <Form.Control type="body" placeholder="Your comment here" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )

    }

}

export default CommentForm