import React from 'react'

const Item = (props) => {
  return (
    <div>
          <h6>
              <a href={props.item.url}>{props.item.title}</a> - {props.item.author} - {props.item.num_comments} - {props.item.points}
          </h6>   
    </div>
  )
}

export default Item
