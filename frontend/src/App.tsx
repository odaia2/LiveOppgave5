import Grid from "./components/Grid";


const students = [
  { id: "1", name: "Odai" },
  { id: "2", name: "Khalil" },
  { id: "3", name: "Abdullah" },
];


function App() {
  return(<>

  {/*<h1>Start</h1>
  <Student id ={13} name="Odai"/>*/}
  <Grid students={students}/>
  
 </>
 )
}

export default App;