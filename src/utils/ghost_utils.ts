import * as base_utils from './ghost_base_utils'
import * as base_toolbar from './ghost_base_toolbar'
import * as string_utils from './StringUtils'
const ghost = Object.freeze({
  base_utils,
  base_toolbar,
  string_utils
})

export type Ghost = typeof ghost
export default ghost
