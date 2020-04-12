import React, { Component } from 'react';

class ShoppingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItemName: '',
      groceryItems: [
        { name: 'Bananas', id: 'item-1', completed: false },
        { name: 'Apples', id: 'item-2', completed: true },
        { name: 'Rice', id: 'item-3', completed: false }
      ],
      validationErrors: {},
      submitted: 0
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleCompletedToggle = this.handleCompletedToggle.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.validateFields = this.validateFields.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateString = JSON.stringify(prevState.groceryItems)
    const updatedStateString = JSON.stringify(this.state.groceryItems)

    if(prevStateString !== updatedStateString) {
      console.log("Save this : ", updatedStateString)
      localStorage.setItem('groceryItems', updatedStateString)
    }
  }

  componentDidMount() {
    const savedState = localStorage.getItem('groceryItems')

    this.setState({
      groceryItems: JSON.parse(savedState)
    })
  }

  handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }

  handleCompletedToggle(e) {
    const itemindexValue = e.target.attributes.itemindex.value
    const index = parseInt(itemindexValue, 10) // access input's custom attribute
    
    console.log('toggling: ' + index)

    const newGroceryItemsState = [...this.state.groceryItems]
    // newGroceryItemsState[index].completed = e.target.checked 
    newGroceryItemsState[index] = {
      ...newGroceryItemsState[index],
      completed: e.target.checked
    }

    this.setState({
      groceryItems: newGroceryItemsState
    })
  }

  handleDelete(e) {
    const itemindexValue = e.target.attributes.itemindex.value
    const index = parseInt(itemindexValue, 10) // access button's custom attribute

    console.log('deleting: ' + index)

    const newGroceryItemsState = [...this.state.groceryItems]
    newGroceryItemsState.splice(index, 1)

    this.setState({
      groceryItems: newGroceryItemsState
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()

    const isFormValid = this.validateFields()

    if (isFormValid) {
      const newGroceryItemObject = {
        completed: false,
        id: 'item-' + Date.now(),
        name: this.state.newItemName
      }
      this.setState((state) => {
        return {
          submitted: state.submitted + 1,
          groceryItems: [...state.groceryItems, newGroceryItemObject],
          newItemName: ''
        }
      })
    }
  }

  validateFields() {
    const {
      newItemName
    } = this.state

    const errors = {}

    if (!newItemName) {
      errors['newItemName'] = 'Please enter grocery item name'
    }

    this.setState({
      validationErrors: errors
    })

    return Object.keys(errors).length === 0
  }

  render() {
    const {
      newItemName: newItemNameError,
    } = this.state.validationErrors

    const {
      groceryItems
    } = this.state

    return (
      <section>
        <h3>Shopping List</h3>
        { !groceryItems.length && <p>No items!</p> }
        <ul>
          {
            groceryItems.map((item, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    name="ix_check"
                    checked={item.completed}
                    onChange={this.handleCompletedToggle}
                    itemindex={index} // lowercase 'itemindex' as per React docs
                  />
                  <span>{item.name} XX </span>
                  <button
                    itemindex={index}
                    onClick={this.handleDelete}
                  >
                    ✕
                  </button>
                </li>
              )
            })
          }
        </ul>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <span className="error">{newItemNameError}</span>
            <input
              type="text"
              name="newItemName"
              placeholder="Bananas"
              value={this.state.newItemName}
              onChange={this.handleOnChange}
            />
          </label>

          <button type="submit">Submit</button>

          <p>Submitted {this.state.submitted} times!</p>
        </form>
      </section>
    )
  }

}

export default ShoppingList;