import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import UseSlider from '../../../Hooks/UseSlider';
const Slider = () => {
  const [image, setImage] = useState(null)
  const [sliderTitle, setSliderTitle] = useState('')
  const [sliderDesc, setSliderDesc] = useState('')
  const imageInputRef = useRef();
  const [addBtnActive, setAddBtnActive] = useState(false)
  const { slider, reLoad, SetReLoad, isLoading, setSlider } = UseSlider()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image)
    const formData = new FormData()
    formData.append('title', sliderTitle)
    formData.append('dec', sliderDesc)
    formData.append('img', image)


    fetch('http://localhost:5000/slider', {
      method: 'POST',

      body: formData
    }).then(res => res.json())
      .then(data => (SetReLoad(reLoad + 1), console.log(data)))

    //clear all input field
    setSliderTitle('')

    setSliderDesc('')
    imageInputRef.current.value = "";
    setImage(null)


  }

  const deleteBlog = (id) => {

    fetch(`http://localhost:5000/slider_delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)

      })
    SetReLoad(reLoad + 4)
  }
  return (
    <div>

      <div className="container">

        <Button variant="primary" onClick={() => setAddBtnActive(!addBtnActive)}>
          add Slides
        </Button>
        <br />
        <br />

        <div className="">
          <div className={addBtnActive ? 'd-block' : 'd-none'}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3 ">
                <Form.Group className='col-6 sm-12' controlId="formGridName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control value={sliderTitle} onChange={(e) => setSliderTitle(e.target.value)} required type="text" placeholder="Enter slider Title" />
                </Form.Group>



              </Row>

              <Form.Group className="mb-2 col-6 sm-12" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descreption</Form.Label>
                <Form.Control
                  value={sliderDesc}
                  onChange={(e) => setSliderDesc(e.target.value)}
                  required as="textarea" rows={3}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group className='col-4 sm-12' controlId="formGridState">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    ref={imageInputRef}
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
            {
              (slider.length > 0) ? <Table responsive>
                <thead>
                  <tr>
                    <th>Id</th>


                    <th> Description</th>

                    <th> Action</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    slider.map((sld, index) => <tr key={index}><td>{index + 1}</td> <td> <img style={{ width: "40px", height: '35px' }} src={` data:image/jpeg;base64,${sld.img}`} /> <h5 className='p-2 d-inline'>{sld.title}</h5></td> <td> <button className="btn btn-danger" onClick={() => deleteBlog(sld._id)}><i class="bi bi-trash-fill"></i></button></td></tr>)
                  }
                </tbody>
              </Table> : ''
            }


          </div>
        </div>
      </div>

    </div>
  )
}

export default Slider