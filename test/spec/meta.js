import test from 'ava'
import meta from '../../src'

test('should throw on no URL', t => {
  t.throws(() => meta(), {
    instanceOf: TypeError,
    message: /invalid meta data/i
  })
  t.pass()
})

test('should determine dirname and filename', t => {
  const {dirname, filename} = meta(import.meta)

  t.true(dirname.length > 0)
  t.true(filename.length > 0)
  t.pass()
})
