import { FaTrashAlt } from "react-icons/fa"
const LineItem = ({item, handelCheck, handelDelete}) => {
  return (
    <li className="item">
        <input
        type="checkbox" 
        onChange={() => {
            handelCheck(item.id)
        }}
        checked={item.checked}/>
        <label
        style={(item.checked) ?{textDecoration: 'line-through'} : null }
        onDoubleClick={() => handelCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt 
            onClick={() => {
            handelDelete(item.id)
            }}
            role="button"
            tabIndex='0'
            aria-label={`Delete ${item.item}`}
        />
    </li>
    )
}

export default LineItem
