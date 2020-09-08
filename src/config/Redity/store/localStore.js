/**
 * @class LocalStore
 * @template T
 */
export default class LocalStore {
  /** @type {DataToolsConnect} */
  dataToolsConnect = null

  /**
   * @private
   * @type {T}
   */
  _store

  /**
   * @property
   */
  _backup

  /**
   * @private
   * @type {function(T):void|boolean}
   */
  _listener = null

  /**
 * @param {RegistersOfConnections} registersOfConnections
 * @param {string|number} keyName
 * @param {T} store
 */
  constructor (registersOfConnections, keyName, store) {
    if (registersOfConnections.has(keyName)) {
      this.dataToolsConnect = registersOfConnections.get(keyName)
    }
    this._store = { ...store }
    this._backup = JSON.stringify(store)
    this.render = this.render.bind(this)
    this.hasChange = this.hasChange.bind(this)
  }

  /**
   * Renderiza
   * @param {object=} props
   * @returns {boolean}
   */
  render (props = {}) {
    if (this.dataToolsConnect == null) return false
    this.dataToolsConnect.render({ ...this.dataToolsConnect.props, ...props })
    return true
  }

  /**
   * @param {object} data
   * @param {boolean} render
   * @returns {boolean}
   */
  update (data, render = false) {
    if (this._listener) {
      const pass = this._listener(Object.freeze({ ...this._store, ...data }))
      if (pass === false) return false
    }
    const data_updated = {
      ...this._store,
      ...data
    }
    this._store = data_updated
    if (render) this.render({ ...this.dataToolsConnect.props })
    return true
  }

  /**
   * @returns {boolean}
   */
  hasChange () {
    if (this._backup === JSON.stringify(this._store)) return false
    return true
  }

  /**
   * Restaura al valor inicial
   * @param {boolean} render
   */
  init (render = false) {
    const values = JSON.parse(this._backup)
    this._store = values
    if (render) this.render()
  }

  /**
   * @returns {T}
   */
  getInit () {
    return JSON.parse(this._backup)
  }

  /**
   * @returns {T}
   */
  get value () {
    return Object.freeze({ ...this._store })
  }

  /**
   * @callback Listener
   * @param {T} values
   * @returns {void|boolean}
   */

  /**
   * @param {Listener} callback
   */
  set on (callback) {
    this._listener = callback
  }
}
