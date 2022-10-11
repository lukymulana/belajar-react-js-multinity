const root = document.querySelector('#root')

function App() {
   const fruits = ['apple', 'Orange', 'Grape', 'Lengkeng'];
   
   return (
      <ul>
         {fruits.map((i) => {
            return <li key={i}>{i}</li>;
         })}
      </ul>
   )
}

ReactDOM.render(<App />, root)