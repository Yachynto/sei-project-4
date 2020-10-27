import React from 'react'

import ImageUpload from './ImageUpload'
import { createLifehack, getCategories } from '../lib/api'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import MenuItem from '@material-ui/core/MenuItem'

class LifehackCreate extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      text: '',
      category: ''
    },
    categories: [],
    errors: {}
  }

  async componentDidMount() {
    try {
      const response = await getCategories()
      this.setState({
        categories: response.data
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
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
      this.props.history.push('/lifehacks/')
      console.log(response.data)
    } catch (err) {
      console.log(err.response.data)
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
              Need to find a way to get categories from back end
              {/* {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))} */}
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