/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "./Counter";

test("カウントアップボタンで「現在のカウント」が+1されるか", () => {
  // arrange
  render(<Counter originCount={0} />)

  // 更新前
  const spanElBeforeUpdate = screen.getByText('現在のカウント:0') 
  expect(spanElBeforeUpdate).toBeInTheDocument();


  //act
  const btn = screen.getByRole('button', {name: 'カウントアップ'}) // 要素を取得
  fireEvent.click(btn) // イベントを実行

  // assertion
  const spanEl = screen.getByText('現在のカウント:1') // 期待される要素の取得
  expect(spanEl).toBeInTheDocument();

})