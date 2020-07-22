// class UnitedK {
//     constructor (Wales, Scotland, Ireland, England){
//       this._Wales = Wales;
//       this._Scotland = Scotland;
//       this._Ireland = Ireland;
//       this._England = England;
//     }
//     greet(Wales, Scotland, Ireland, England){
//         return${this._Scotland} 'says Haggis';
//         out
//     }
//   }
function changeCount() {
    let counter = 0;
    function change(val) {
      counter += val;
    }
    return {
      increment: function () {
        change(1);
      },
      decrement: function () {
        change(-1);
      },
      value: function () {
        return counter;
      },
    };
  }
 
  let count = changeCount();
  console.log(count.value()); // 0
  count.increment();
  count.increment();
  console.log(count.value()); // 2
  count.decrement();
  console.log(count.value()); // 1
  