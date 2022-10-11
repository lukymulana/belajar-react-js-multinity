const root = document.querySelector('#root')

function App() {
   const [login, setLogin] = React.useState(false);

   if (login) {
      return <h1>Success</h1>
   }   
   
   return (
      <>
         <h1>Klik Login !!!</h1>
         <button onClick={function () {
            setLogin(true);
         }}>
            Login
         </button>
      </>
   )
}

ReactDOM.render(<App />, root)