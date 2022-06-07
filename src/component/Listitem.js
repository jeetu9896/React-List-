const Listitem =(props) => {
  // console.log("in list item",props)
  const {listitem} = props;
  console.log(listitem)
  return <li>{listitem.title}</li>
  

}
export default Listitem;