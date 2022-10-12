import './center.css'

const Center = ({title, active, setSelected, id}) => {
  return (
    <>
      <div className="centerr">
        <a className='tag' href='#meal'>
          <span className={active ? "spantext active" : "spantext"} onClick={() => setSelected(id)}>{title}</span>
        </a>
      </div>
    </>
  )
}

export default Center