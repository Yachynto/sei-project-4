import React from 'react'

import ImageUpload from './ImageUpload'

import { createLifehack } from '../lib/api'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

class LifehackCreate extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      text: '',
      category: []
    },
    categories: ['Technology', 'Smartphone', 'House'],
    errors: {}
  }

  async componentDidMount() {
    console.log(this.state.formData.category)
    // try {
    //   const response = await getCategories()
    //   const responseData = response.data
    //   const nameCategory = responseData.map(item => {
    //     return item
    //   })
      
    //   this.setState({
    //     formData: {
    //       category: nameCategory
    //     }
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
    console.log(this.state.categories)
  }
  handleCategorychange = event => {
    const updateCategory = {
      ...this.state,
      [event.target.name]: event.target.value
    }
    this.setState({ updateCategory })
    console.log(updateCategory)
    console.log(this.state.formData.category)
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
    console.log(formData)
  }

  handleImageChange = url => {
    const formData = { ...this.state.formData, image: url }
    this.setState({ formData })
    console.log(formData.image)
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await createLifehack(this.state.formData)
      window.location.href = '/'
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
    
  }

  render() {
    const { name, image, text, category } = this.state.formData
    return (
      <Box component="span" m={1}>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div>
            <TextField
              id="outlined-required"
              name="name"
              label="Title"
              variant="outlined"
              defaultValue={name}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined"
              name="text"
              label="Text"
              variant="outlined"
              defaultValue={text}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-select-currency"
              select
              name="category"
              label="Category"
              defaultValue={category}
              onChange={this.handleChange}
              helperText="Please select a category"
              variant="outlined"
            >
              <MenuItem value={[4]}>Technology</MenuItem>
              <MenuItem value={[5]}>Smartphone</MenuItem>
              <MenuItem value={[6]}>House</MenuItem>
            </TextField>
          </div>
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span" onClick={this.handleFileUpload}>
              <ImageUpload
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                name="image"
                type="file"
                onChange={this.handleImageChange}
                defaultValue={image}
              />
            </Button>
          </label>
          <Button variant="contained" color="secondary" type="submit">Create</Button>
        </form>
      </Box>
    )
  }
}
export default LifehackCreate