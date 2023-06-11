const Child2=(props)=>{
    const {setSelectedOption}=props
    return(
        <div className="child2">
        <h3>Child Component 2</h3>
        <button onClick={()=>(setSelectedOption("Option 2"))}>Option 2</button>
    </div>
    )
}
export default Child2;