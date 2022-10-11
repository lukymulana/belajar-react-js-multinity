const root = document.querySelector('#root');

function App() {
  const fruits = ['apple', 'Orange', 'Grape', 'Lengkeng'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(i => {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, i);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);