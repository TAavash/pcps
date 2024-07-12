
const GreetComponent = ({name,caste}) => {
    // console.log(props);
    const styles={
        div:{
            backgroundColor: 'lightblue',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 5px 1px lightblue'
        }
    }
  return (
    <div style={styles.div} >
        <h1 className="text-white">Greet Component</h1>
        <p>Hello, {name} {caste}! we are learning props in component</p>
    </div>
  )
}

export default GreetComponent;