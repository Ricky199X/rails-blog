import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'


class CommentForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            commenter: '',
            body: ''
        }
    }


    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`this is a submission`)

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        // submit the comment to the database
        const comment = this.state
        const article_id = this.props.articleId

        axios.post('/api/v1/comments', { comment, article_id })
            .then(resp => {
                debugger
            })
            .catch(resp => { })
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