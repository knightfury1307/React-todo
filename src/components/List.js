
const list = (props) => {

console.log(props)
 return  props.comp ? <div className='list'><h2>{props.arr}</h2><img src="https://svgsilh.com/svg/31226.svg" alt="cross" onClick={() => {props.handleClick(props.id)}} /></div> : <div></div>
}

export default list