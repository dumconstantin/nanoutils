import _curry2 from '../_internal/_curry2'

export default _curry2(function pick(props, obj) {
  return props.reduce(function(nObj, prop) {
    if (obj[prop]) nObj[prop] = obj[prop]
    return nObj
  }, {})
})
