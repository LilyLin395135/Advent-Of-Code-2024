# Advent-Of-Code-2024
[Advent-Of-Code-2024](https://adventofcode.com/2024) - Coding challenges for the countdown to Christmas in 2024.

# Day 1
## part 1
## part 2

# Day 2
## part 1
* 題目說明：
  * 目標：判斷輸入的數字報告是否符合安全條件
  * 安全條件：
    * 單行數字要逐漸增加或逐漸減少。
    * 相鄰的數字差值需在 1~3 之間。
* 解題邏輯：
  1. 輸入處理
     * 將輸入透過 `.split('\n')` 分行，轉換為多行數字報告。
     * 使用 `.filter(Boolean)` 去除空行。
     * 將每行字串分割為數字陣列（用 `.split(' ')`）。
  2. 安全檢查邏輯：
     * 計算每行數字的「相鄰差值陣列」，使用 `.map` 遍歷計算，使用 `.slice(0, -1)` 移除最後一個元素。
     * 檢查相鄰差值是否滿足條件：（用 `.every` 檢查，當一個不符合就回傳 false）
       * 差值在範圍 1~3。
       * 差值是否全部為正或全部為負。
* 使用的 method：
  * array method
    * [every](#every)
    * [slice](#slice)
    * [splice](#splice)
    * [filter](#filter)
    * [map](#map)
  * string method
    * [split](#split)
  * Math method
    * [Math.abs](#Mathabs)

## part 2 - 深拷貝 splice、淺拷貝 slice
* 題目說明：
  * 目標：在 Part 1 的基礎上，加入了 Problem Dampener 邏輯。
    如果一份報告不安全，嘗試刪除報告中的一個數字，再次驗證安全性。
  * 新增安全條件：
    * 如果移除單行數字中的任意一個數字後，可以符合 Part 1 的安全條件，該報告也算作安全。
* 解題邏輯：
    * 新增 Problem Dampener 機制：
      * 如果不符合安全條件，嘗試移除每個數字（用 `.some` 遍歷每個數字），檢查移除後是否符合安全條件。
      * 每次移除後，用 `.slice` 和 `.concat` 合併被移除數字的前後部分，形成新的數字陣列。
* 使用的 method：
  * array method
    * [every](#every)
    * [some](#some)
    * [slice](#slice)
    * [splice](#splice)
    * [concat](#concat)
    * [filter](#filter)
    * [map](#map)
  * string method
    * [split](#split)
  * Math method
    * [Math.abs](#Mathabs)

# Javascript Methods
## string method
### split
`string.split(separator, limit)`
* 方法說明：
  * 將字串分割為 array，依據 separator 定義的分隔符。
  * 如果指定 limit，返回的 array 不會超過該限制數量。
* 參數說明：
  1. `separator`：分隔符，可以是字串或正規表達式。
  2. `limit`（可選）：分割的 array 長度限制。
* 回傳值：
  * 返回分割後的 new array。
* 範例程式碼：
  ```
  const str = "a,b,c,d,e";
  console.log(str.split(",")); // ['a', 'b', 'c', 'd', 'e']
  console.log(str.split(",", 3)); // ['a', 'b', 'c']
  ```

## array method
### map
`array.map(callback(currentValue, index, array))`
* 方法說明：
  * 建立一個新的 array，其內容為原 array 每個元素經過 callback 處理的結果。
  * 不會改變原始 array。
* 參數說明：
  1. `currentValue`：array 中當前處理的元素。
  2. `index`：當前處理元素的 index。
  3. `array`：目前正在處理的 array。
* 回傳值：
  * 返回一個新數組。
* 範例程式碼：
  ```
  const numbers = [1, 2, 3];
  const squares = numbers.map(num => num * num);
  console.log(squares); // [1, 4, 9]
  console.log(numbers); // [1, 2, 3]
  ```
### filter
`array.filter(callback(currentValue, index, array))`
* 方法說明：
  * 過濾數組，返回所有滿足 callback 條件的元素組成的新數組。
  * 不會改變原始數組。
* 參數說明：
  1. `currentValue`：array 中當前處理的元素。
  2. `index`：當前處理元素的 index。
  3. `array`：目前正在處理的 array。
* 回傳值：
  * 返回一個包含符合條件元素的新 array。
* 範例程式碼：
  ```
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // [2, 4]
  console.log(numbers); // [1, 2, 3, 4]
  ```
### slice
`array.slice(start, end)`
* 方法說明：
  * 返回一個新 array，包含從 start 到（但不包括）end 的項目。
  * 不會改變原始 array。
* 參數說明：
  1. `start`（可選）：開始提取的 index，包含。
  2. `end`（可選）：結束提取的 index，不包含。若未指定，提取至 array 末端。
* 回傳值：
  * 返回分割後的新 array。
* 範例程式碼：
  ```
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.slice(1, 3)); // [2, 3]
  console.log(numbers.slice(2)); // [3, 4, 5]
  console.log(numbers); // [1, 2, 3, 4, 5]
  ```
### splice
`array.splice(start, deleteCount, item1, item2, ...)`
* 方法說明：
  * 將 array 內容進行增刪改操作，並 **返回被刪除的元素**。
  * 會改變原始 array。
* 參數說明：
  1. `start`：操作的起始 index。
  2. `deleteCount`：刪除的元素數量。
  3. `item1`, `item2`, ...（可選）：新增至 array 的元素。
* 回傳值：
  * 返回包含被刪除元素的新 array。
* 範例程式碼：
  ```
  const numbers = [1, 2, 3, 4];
  console.log(numbers.splice(1, 2)); // [2, 3]
  console.log(numbers); // [1, 4]
  ```
### concat
`array.concat(value1, value2, ...)`
* 方法說明：
  * 合併數組，返回一個包含新元素或 array 的 new array。
  * 不會改變原始 array。
* 參數說明：
  1. `value1`, `value2`, ...：要合併的數組或值。
* 回傳值：
  * 返回 new array。
* 範例程式碼：
  ```
  const array1 = [1, 2];
  const array2 = [3, 4];
  console.log(array1.concat(array2)); // [1, 2, 3, 4]
  console.log(array1); // [1, 2]
  console.log(array2); // [3, 4]
  ```
### every
`array.every(callback(currentValue, index, array))`
* 方法說明：
  * 檢查 array 中是否所有元素都符合條件。
  * 如果有一個不符合條件，則返回 false，並停止檢查。
  * **注意：** every() 不會檢查空 array。
  * **注意：** every() 不會改變原始 array。
* 參數說明：
  1. `currentValue`：array 當前遍歷的值。
  2. `index`：array 當前遍歷的 index。
  3. `array`：目前正在遍歷的 array。
  * 若某參數未被使用，用 `_` 表示。
* 回傳值：
  * 返回布林值，表示當前條件是否符合。
* 範例：
  ```
  const numbers = [2, 4, 6];
  console.log(numbers.every(num => num % 2 === 0)); // true
  ```
  ```
  const isAllPositiveOrNegative = (adjacentArray) => {
    return adjacentArray.every(number => number !== 0) &&
        (
            adjacentArray.every(number => number > 0) ||
            adjacentArray.every(number => number < 0)
        );
  };
  const isInAdjacentLevel = (adjacentArray, adjacentLevel) => {
    return adjacentArray.every(number => Math.abs(number) <= adjacentLevel);
  };
  ```
### some
`array.some(callback(currentValue, index, array))`
* 方法說明：
  * 檢查 array 中是否至少有一個元素符合條件。
  * 如果有一個符合條件，返回 true，並停止檢查剩餘的元素。
* 參數說明：
  1. `currentValue`：array 當前遍歷的值。
  2. `index`：array 當前遍歷的 index。
  3. `array`：目前正在遍歷的 array。
  * 若某參數未被使用，用 `_` 表示。
* 回傳值：
  * 返回布林值，表示當前條件是否符合。
* 範例：
  ```
  const numbers = [1, 3, 5];
  console.log(numbers.some(num => num % 2 === 0)); // false
  ```
  ```
  numbers.some((_, i) => {
  const modifiedNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));
  return checkSafety(modifiedNumbers, adjacentLevel); // true or false
  });
  ```

## Math Method
### Math.abs
`Math.abs(number)`
* 方法說明：
  * 返回數字的絕對值。
* 參數說明：
  1. `number`：要計算絕對值的數字
* 回傳值：
  * 返回非負數。
* 範例程式碼：
  ```
  console.log(Math.abs(-5)); // 5
  console.log(Math.abs(5)); // 5
  ```
### Math.sqrt
`Math.sqrt(number)`
* 方法說明：
  * 返回數字的平方根。
* 參數說明：
  1. `number`：要計算平方根的數字。
* 回傳值：
  * 返回平方根的值，若數字小於 0，返回 NaN。
* 範例程式碼：
  ```
  console.log(Math.sqrt(9)); // 3
  console.log(Math.sqrt(2)); // 1.4142135623730951
  ```
