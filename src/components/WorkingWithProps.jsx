
function WorkingWithProps({ image, title, price}) {
  return (
        <div className="items">
            <img src={image} />
            <p>{title}</p>
            <p>{price}</p>
        </div>
  )
}
export default WorkingWithProps