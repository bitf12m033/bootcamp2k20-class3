// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
function App({name , con, age}) {
    return (
      <div>
        <p>

        Hello From {name} , from {con} age {age}
        </p>
        <Hello/>
      </div>
    );
}

export default App;