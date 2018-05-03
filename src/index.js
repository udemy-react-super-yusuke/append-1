import React from "react";
import { render } from "react-dom";
import App from "./components/App";

// この {} での import も Destructuring assignment に似たシンタックス
import { const1, const2 } from "./const";
console.log(const1, const2, "imported constant");

// object を定義
const obj1 = {
  name: "Nakanaishi",
  music: "Jazz-funk"
};

// name, music という変数を作って、
// 直接 object の内容を展開して代入するシンタックス
const { name, music } = obj1;
console.log(name, music, "obj1");

// 引数を受け取る際に、オブジェクトを展開して受け取るシンタックス
const func1 = ({ name, music }) => console.log(name, music, "func1");
// オブジェクトを関数に渡す
func1(obj1);

// name, music を App コンポーネントに渡す
render(<App name="name" music="jazz" />, document.getElementById("root"));
