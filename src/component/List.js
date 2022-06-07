import Listitem from "./Listitem"

const List = (props) =>{
    // console.log("in list",props)
    const {list} = props;
    return <>
    {
        list.map(( item )=>(
            <Listitem listitem={item} />
        )
        )
    }
    </>
}

export default List