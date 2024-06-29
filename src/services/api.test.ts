import { login, register } from './api';

test('login API', async () => {
  const data = await login('eve.holt@reqres.in', 'cityslicka');
  expect(data).toHaveProperty('token');
});

test('register API', async () => {
  const data = await register('eve.holt@reqres.in', 'pistol');
  expect(data).toHaveProperty('token');
});
