import { useCustomInspector } from '@vue/devtools-applet'
// @ts-expect-error skip type check
import type { CustomInspectorType } from '@vue/devtools-applet'

import type { ModuleBuiltinTab } from '~/types/tab'

export function useCustomInspectorTabs() {
  const { registeredInspector } = useCustomInspector()

  const customInspectorTabs = computed<ModuleBuiltinTab[]>(() => {
    return registeredInspector.value.map((inspector: CustomInspectorType, index) => {
      return {
        order: index,
        name: inspector.id,
        icon: inspector.logo,
        fallbackIcon: inspector.icon,
        title: inspector.label,
        path: `${CUSTOM_INSPECTOR_TAB_VIEW}/${inspector.id}`,
        category: 'modules',
      }
    })
  })

  return customInspectorTabs
}
