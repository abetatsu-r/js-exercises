export function newHashTable() {
  return {
    size: 0, // マッピング数を示すプロパティ
    // 数値でアクセスする(a[3] = keyを3にhashしたところに{key: value}が入ってる)
    entries: [], // マッピングを格納する配列
    get(key) {
      let h_key = hash(key);
      let data = this.entries[h_key];
      let next = data;
      while (next) {
        if (next.key === key) {
          return next.value;
        }
        next = next.next;
      }
    },
    put(key, value) {
      let h_key = hash(key);

      let data = this.entries[h_key];
      // 衝突しなければそのまま代入する
      if (data === undefined) {
        // ちょっと怪しい
        this.entries[h_key] = { key, value };
        this.size++;
        return;
      }

      // 値を上書きする場合
      let next = data;
      while (next) {
        if (next.key === key) {
          // keyが一致していたらvalueを上書きして終了
          next.value = value;
          return;
        }

        console.log(next);
        next = next.next;
        console.log(next);
      }

      // 衝突していた場合
      this.entries[h_key] = { key, value, next: data };
      this.size++;
    },

    // keyのマッピングを削除する
    remove(key) {
      let h_key = hash(key);
      let data = this.entries[h_key];
      let next = data?.next;
      if (data?.key === key) {
        this.entries[h_key] = next;
        this.size--;
        return;
      }

      while (next) {
        if (next.key === key) {
          data.next = next.next;
          this.size--;
          return;
        }
      }

      throw new Error("no key");
    },
  };
}

/**
 * hash関数
 * - 文字列に対してcodePointAtでとれる値の和を100で割ったあまりとする
 * @param {*} key
 * @returns hash値
 */
function hash(key) {
  let hash = 0;
  for (let char of key) {
    hash += char.codePointAt(0);
  }

  return hash % 100;
}

function sample() {
  const hashTable = newHashTable();
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  console.log(hashTable);
  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1

  console.log(hashTable);
}

//sample();
