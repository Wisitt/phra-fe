import 'dayjs/locale/th'

import dayjsPrimitive from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjsPrimitive.locale('th')
dayjsPrimitive.extend(buddhistEra)
dayjsPrimitive.extend(isSameOrBefore)
dayjsPrimitive.extend(isSameOrAfter)
dayjsPrimitive.extend(relativeTime)

export const dayjs = dayjsPrimitive
