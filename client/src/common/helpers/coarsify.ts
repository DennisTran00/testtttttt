// 100 段階になるように精度を落とす
// Reduce accuracy so that it will be 100 stages

export default function coarsify(val: number, min = 0, max = 1) {
  const range = max - min
  /**
    変化量
    キリがよくなるように、0.1, 1, 10, 100, ... のような数値をとる
    
    Amount of change
    Take numbers like 0.1, 1, 10, 100, ... so that Kiri becomes good
    
  */
  const step = Math.pow(10, Math.floor(Math.log10(range))) / 100
  const v = Math.min(max, Math.max(min, Math.round(val / step) * step))

  return parseFloat(v.toPrecision(3)) // 有効桁数3桁にして浮動小数点の誤差で .00000002 のようになるのを防ぐ A floating point error is prevented by reducing the number of significant digits.
}
