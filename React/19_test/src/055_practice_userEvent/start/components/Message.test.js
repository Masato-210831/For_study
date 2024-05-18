import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Message from './Message'



describe('Messageコンポーネントの動作確認', () => {
  test('input要素の初期動作', () => {
    render(<Message />)
    const inputEl =  screen.getByRole('textbox')
    expect(inputEl.value).toBe('')
  })

  test('input要素の更新時の挙動', async () => {
    const {debug} = render(<Message />)
    const user = userEvent.setup()
    const inputEl =  screen.getByRole('textbox')
    await user.type(inputEl, 'こんにちは')
    expect(inputEl.value).toBe('こんにちは')
  })
})