import { createRpcServer } from '@vue/devtools-kit'
import { functions } from '@vue/devtools-core'

window.addEventListener('message', handshake)

createRpcServer(functions, {
  preset: 'extension',
})

function handshake(e: MessageEvent) {
  if (e.data.source === 'proxy->server' && e.data.payload.event === 'init') {
    window.removeEventListener('message', handshake)

    const listeners: ((event: unknown) => void)[] = []
  }
}
