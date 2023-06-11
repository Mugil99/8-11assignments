const Child1=(props)=>{
    const {setSelectedOption}=props
    return(
        <div className="child1">
            <h3>Child Component 1</h3>
            <button onClick={()=>(setSelectedOption("Option 1"))}>Option 1</button>
        </div>
    )
}
export default Child1;