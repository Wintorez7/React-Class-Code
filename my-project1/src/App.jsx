
// import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Form from './components/Form';
import FormClass from './components/FormClass';
// import ChildToParent from './components/ChildToParent';

function App() {

  //let name = "Iron man";

  // function sendData(){

  // }
  return (
    <div className="App">
      {/* <ChildToParent/> */}
      {/* <Child1/>
      <Child2/> */}
      <Form/>
      <FormClass/>
     
    </div>
  );
}

export default App;
