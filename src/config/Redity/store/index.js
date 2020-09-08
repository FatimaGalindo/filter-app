import LocalStore from './localStore'

/**
 * @type {Map<string, import('./states').default>}
 */
export const Store = new Map()

export default function localStores () {
  /** @type {RegistersOfConnections} */
  const registersOfConnections = new Map()

  /** @type {HideChildrens} */
  const hideChildrens = new Map()

  /** @type {TemplateChildrens} */
  const templateChildrens = new Map()

  /**
   * Crear un store
   * @template T
   * @param {string|number} keyName
   * @param {T} store
   */
  function _createStore (keyName, store) {
    return new LocalStore(registersOfConnections, keyName, store)
  }

  return {
    registersOfConnections,
    hideChildrens,
    createStore: _createStore,
    templateChildrens
  }
}
