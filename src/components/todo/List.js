import React, { Component } from 'react'
import ItemRow from './ItemRow'
import './list.css'

export default class List extends Component {
  
  state = {
    items: []
  }
  
  addHandler = () => {
    // grab input value
    const value = this.input.value
    const done = false
    
    // make an item
    const item = { value, done } // equals to { value: value }
    
    // new items object by cloning state items and adding item
    const items = Array.from(this.state.items)
    items.push(item)
    
    // update the state items
    this.setState({ items })
    this.input.value = ''
  }
  
  
  clickHandler = (event) => {
    // clone state items
    const newItems = Array.from(this.state.items)
    
    // get idx of item
    const idx      = parseInt(event.currentTarget.dataset.idx)
    
    // calculate new done value
    const newValue = !newItems[idx]['done']

    // update item (inside items) with new value
    newItems[idx]['done'] = newValue

    // update state with new items
    this.setState({ items: newItems })
  }


  setInputRef = el => this.input = el
  
  render() {
    const { items } = this.state

    const itemRows = items.map((item, idx) => {
      return (
        <ItemRow
          idx={idx}
          key={idx}
          item={item}
          clickHandler={this.clickHandler}
        />
      )
    })
    
    return (
      <div>
        <input
          ref={this.setInputRef}
          type="text"
          placeholder="Watcha gotta do?"
        />
        <button onClick={this.addHandler}>Add</button>
        {itemRows}
      </div>
    )
  }
  
}
