const obj = {
  m: function () {
    console.log(
      "この関数の呼び出しコンテキストはobjである？: " + (this === obj),
    ); // true

    f();

    function f() {
      console.log("だが、入れ子関数の呼び出しコンテキストは、" + this); // undefined
    }

    const g = () => {
      console.log("アロー演算子だとobjである？: " + (this === obj)); // obj
    };

    const h = function bind_f() {
      console.log("だが、bindによって、objになる: " + (this === obj)); // undefined
    }.bind(this);

    g();
    h();
  },
};

obj.m();
