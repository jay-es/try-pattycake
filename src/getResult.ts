import { match } from 'ts-pattern'

type UserResponse =
  | { type: 'ok'; data: { name: string } }
  | { type: 'error'; error: { message: string } }

/** 20% の確率でエラーを返す関数 */
function getUser(): UserResponse {
  return Math.random() > 0.2
    ? { type: 'ok', data: { name: 'Alice' } }
    : { type: 'error', error: { message: 'Oops! Something went wrong.' } }
}

export function getResultText(): string {
  const response = getUser()

  return match(response)
    .with({ type: 'ok' }, (res) => res.data.name)
    .with({ type: 'error' }, (res) => res.error.message)
    .exhaustive()
}
