export default function reject(cb, obj) {
  return Array.isArray(obj)
    ? obj.filter(function(i) {
      return !cb(i)
    })
    : Object.keys(obj).reduce(function(res, cur) {
      if (!cb(obj[cur])) res[cur] = obj[cur]
      return res
    }, {})
}
