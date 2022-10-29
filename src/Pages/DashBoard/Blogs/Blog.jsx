import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';


const Blog = () => {
    const [addBtnActive, setAddBtnActive] = useState(false)
    const [title, setTitle] = useState("")
    const [descreption, setDescreption] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState(null)
    const [blogs, setBlogs] = useState([])




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(image)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('dec', descreption)
        formData.append('date', date)
        formData.append('img', image)


        fetch('http://localhost:5000/add_blog', {
            method: 'POST',

            body: formData
        }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))

        //clear all input field
        setTitle('')
        setDate('')
        setDescreption('')

    }

    useEffect(() => {
        fetch('http://localhost:5000/add_blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="container">

            <Button variant="primary" onClick={() => setAddBtnActive(!addBtnActive)}>
                add blogs
            </Button>
            <br />
            <br />

            <div className="">
                <div className={addBtnActive ? 'd-block' : 'd-none'}>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 ">
                            <Form.Group className='col-6 sm-12' controlId="formGridName">
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required type="text" placeholder="Enter Blog Title" />
                            </Form.Group>



                        </Row>

                        <Form.Group className="mb-2 col-6 sm-12" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descreption</Form.Label>
                            <Form.Control
                                value={descreption}
                                onChange={(e) => setDescreption(e.target.value)}
                                required as="textarea" rows={3}
                            />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group className='col-4 sm-12' controlId="formGridState">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required type='date'
                                />
                            </Form.Group>


                        </Row>
                        <Row className="mb-3">
                            <Form.Group className='col-4 sm-12' controlId="formGridState">
                                <Form.Label>Image</Form.Label>
                                <Form.Control

                                    accept='image/*'
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required type='file'
                                />
                            </Form.Group>


                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
            <br /><br />
            <div className="container blog-manage-section">
                <div className="container">
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Id</th>


                                <th> Description</th>

                                <th> Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs?.map((blog, index) => <tr key={index}><td>{index + 1}</td> <td> {blog.title}</td> <td> <button className="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td></tr>)
                            }
                        </tbody>
                    </Table>


                </div>
            </div>
        </div>
    )
}

export default Blog