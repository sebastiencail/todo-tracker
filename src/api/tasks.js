/**
 * Mocking client-server processing
 */
const _tasks = [
  { id: 1, libelle: 'Ma tache one' },
  { id: 2, libelle: 'Ma tache two' },
  { id: 3, libelle: 'Ma tache three' }
]

export default {
  async getTasks () {
    await wait(100)
    return _tasks
  }
}

function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
