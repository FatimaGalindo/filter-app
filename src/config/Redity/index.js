import localStores, { Store } from './store'
import createConnect from './core/createConnect'
import renderManagement from './core/renderManagement'
import makeCapsule from './capsule/makeCapsule'
import toolsCapsule from './capsule/toolsCapsule'
import generateCreateTemplate from './utils/generateCreateTemplate'
import States from './store/states'

/**
 * @class Redity
 * @version 1.0.0-beta.7.3
 * Redity library
 */
export default function Redity () {
  const { registersOfConnections, hideChildrens, createStore, templateChildrens } = localStores()
  const { render, wait, proceed, hasRendersWaiting } = renderManagement(registersOfConnections)
  const { getCapsuleByKeyName, getProps, setProps, getPayload, setTemplate, removeTemplate } = toolsCapsule(registersOfConnections, hideChildrens, templateChildrens)

  /**
   * @param {string|number} keyName
   * @param {OptionConnect|function(object):OptionConnect=} optionControl
   */
  function connect (keyName, optionControl) {
    const connection = createConnect(registersOfConnections, hideChildrens, templateChildrens)
    return connection(keyName, optionControl)
  }

  const { Capsule, createCapsule } = makeCapsule(registersOfConnections, connect)

  this.connect = connect
  this.render = render
  this.wait = wait
  this.proceed = proceed
  this.hasRendersWaiting = hasRendersWaiting
  this.getProps = getProps
  this.Capsule = Capsule
  this.createCapsule = createCapsule
  this.getCapsuleByKeyName = getCapsuleByKeyName
  this.getPayload = getPayload
  this.createStore = createStore
  this.setTemplate = setTemplate
  this.removeTemplate = removeTemplate
  this.createTemplate = generateCreateTemplate(this)
  this.setProps = setProps
}

Redity.States = States

/**
 * @template T
 * @param {string} keyName
 * @param {T} initData
 * @returns {States<T>}
 */
Redity.createStore = function (keyName, initData) {
  /**
   * @type {States<T>}
   */
  const states = new States(initData)
  /**
   * @type {Store<string, States<T>>}
   */
  Store.set(keyName, states)
  return states
}
