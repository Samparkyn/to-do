import React     from 'react'
import PropTypes from 'prop-types'

ItemRow.propTypes = {
  item: PropTypes.object
}

export default function ItemRow({item}) {
  return (
    <div>
      <p>{item.value}</p>
      <p>{item.done}</p>
    </div>
  )
}
