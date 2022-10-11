const root = document.querySelector('#root')

function App() {
   const [login, setLogin] = React.useState(false);  
   
   return (
      <>
         <h1>Klik Login !!!</h1>
         <p>{login && <b>Success</b>}</p>
         <button onClick={function () {
            setLogin(true);
         }}>
            Login
         </button>
      </>
   )
}

ReactDOM.render(<App />, root)