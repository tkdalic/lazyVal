# node lazy val

## 概要

node で scala の lazy val を再現しました｡

1 度目呼び出し時に値を計算し､2 度目以降は 1 度目にキャッシュした値を呼び出すように作っています｡

## 実装例

```typescript
import { lazyVal } from "node-lazy-val";

class Foo {
  @lazyVal() public random() {
    return Math.round(Math.random() * 100);
  }
}

const foo = new Foo();
console.log(foo.random());
console.log(foo.random());
```

output

```
77
77
```
