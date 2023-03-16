import './index.css'

const HistoryView = props => {
  const {history, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDeleteClick = () => {
    deleteFun(id)
  }

  return (
    <li className="historyBar">
      <div className="part1">
        <p className="time">{timeAccessed}</p>
        <img className="Logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>

      <button
        type="button"
        onClick={onDeleteClick}
        data-testid="delete"
        className="deleteButton"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryView
