import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


class CommentForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            commenter: '',
            body: '',
            shouldRedirect: false
        }
    }


    handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`this is a submission`)
        console.log(this.state)
    }

    render() {
        return (

            <div className="comment-form">
                <h3>Add a comment:</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            <strong>Commenter</strong>
                        </Form.Label>
                        <Form.Control
                            name="commenter"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            <strong>Body</strong>
                        </Form.Label>
                        <Form.Control
                            name="body"
                            type="text"
                            placeholder="Your comment here"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Comment
                    </Button>
                </Form>
            </div>
        )

    }

}

export default CommentForm