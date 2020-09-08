/**
 * create render
 * @param {RegistersOfConnections} registersOfConnections
 */
export default function renderManagement (registersOfConnections) {
  let waitRender = false
  let countRendersWaiting = 0

  function defaultControlRender () {
    return true
  }

  /**
   * @param {DataToolsConnect} connection
   */
  function saveWaitRender (connection) {
    registersOfConnections.set(connection.keyName, {
      ...connection,
      waiting: true
    })
    countRendersWaiting++
  }

  /**
   * Realiza un render al componente connectado o encapsulado por su keyName. Si no encuentra la conexion o no está renderizado en la vista, retornará un false.
   * @param {string|number} keyName keyName for render
   * @param {object=} nextProps
   * @param {function(object):boolean=} controlRender Controla el render por una condición
   * @returns {boolean}
   */
  function render (keyName, nextProps = {}, controlRender = defaultControlRender) {
    if (!registersOfConnections.has(keyName)) return false
    const connection = registersOfConnections.get(keyName)

    if (waitRender) {
      saveWaitRender(connection)
      return false
    }

    const willRender = controlRender(Object.freeze({ ...connection.props }))
    if (!willRender) return false
    connection.render({ ...connection.props, ...nextProps })
    return true
  }

  function wait () {
    waitRender = true
  }

  /**
   * @returns {number}
   */
  function proceed () {
    if (!waitRender) return 0
    waitRender = false
    let renders = 0
    registersOfConnections.forEach(connection => {
      if (connection.waiting) {
        render(connection.keyName, connection.props)
        renders++
        connection.waiting = false
      }
    })
    countRendersWaiting = 0
    return renders
  }

  function hasRendersWaiting () {
    return countRendersWaiting > 0
  }

  /**
   * get current props of connection
   * @param {string|number} keyName
   */
  function getProps (keyName) {
    if (!registersOfConnections.has(keyName)) return {}
    const connection = registersOfConnections.get(keyName)
    return Object.freeze({ ...connection.props })
  }

  return {
    render,
    wait,
    proceed,
    hasRendersWaiting,
    getProps
  }
}
