const root = document.querySelector('#root')

function App() {
   const [diklik, setDiklik] = React.useState(false);
   const [count, setCount] = React.useState(0);

   React.useEffect(() => {
      console.log('exec');
   
      return () => {
         console.log('destroy');
      }
   });
   
   
   return (
      <>
         <h1 id="judul">Hello ini judul</h1>
         <button onClick={function () {
            setDiklik(true);
         }}>
            Di Klik
         </button>
         <button onClick={function () {
            setCount(count+1);
         }}>
            Tambah
         </button>
         <span>Sudah ditambah {count}</span>
      </>
   )
}

ReactDOM.render(<App />, root)