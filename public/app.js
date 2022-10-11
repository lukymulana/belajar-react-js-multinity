const root = document.querySelector('#root');

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('exec');
    return () => {
      console.log('destroy');
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "Di Klik"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), /*#__PURE__*/React.createElement("span", null, "Sudah ditambah ", count));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);