import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Jefferson'

  expect(user.name).toEqual('Jefferson')
})
