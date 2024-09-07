/*
*
* Заменяет изменённые значения параметров 1
* объекта значениями второго объекта
*
* */

export const diff_objects = (object1: any, object2: any) => {
  let res: any = {}
  let diff_keys = Object.keys(object1).filter(k => object1[k] !== object2[k])

  diff_keys.map(key => {
    res[key] = object2[key]
    return null
  })

  return res
}