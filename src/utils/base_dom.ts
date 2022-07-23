export function getElementById (id: string): HTMLElement | null {
  return document.getElementById(id)
}

export function getParentById (id: string) {
  var el = getElementById(id)
  if (el) {
    return el.parentNode
  }
  return null
}

export function getParentFirstChildById (id: string) {
  var p = getParentById(id)
  if (p) {
    return p.firstChild
  }
  return null
}

export function createIdElement (tag: string, id: string) {
  var newNode = document.createElement(tag)
  newNode.setAttribute('id', id)
  return newNode
}

export function existIdElement (id: string) {
  return getElementById(id) != null
}

// export function getChildrenAttr (select,attr) {
//   var childrens = $(select).children()
//   var cl = childrens.length
//   var ret = []
//   for (let i = 0; i < cl; i++) {
//     var c = childrens[i]
//     ret.push($(c).attr(attr))
//   }
//   return ret
// }
