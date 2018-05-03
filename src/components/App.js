import React from "react";

// 引数に入ってきた object を展開して受け取る
// 関数 であり、同時に React Component
const App = ({ name, music }) => (
  <div>
    App {name} {music}
  </div>
);

export default App;
