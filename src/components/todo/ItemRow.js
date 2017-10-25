import React     from 'react'
import PropTypes from 'prop-types'

ItemRow.propTypes = {
  item:         PropTypes.object,
  idx:          PropTypes.number,
  clickHandler: PropTypes.func
}

export default function ItemRow({item, idx, clickHandler}) {
  return (
    <div data-idx={idx} onClick={clickHandler}>
      <p>{item.value}</p>
      <p>{item.done}</p>
    </div>
  )
}
