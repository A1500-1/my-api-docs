declare const __SITE_VERSION__: string

const refreshParam = '__site_version'
const interval = 60_000

export function startAutoUpdate() {
  const currentUrl = new URL(window.location.href)
  if (currentUrl.searchParams.get(refreshParam)?.startsWith(`${__SITE_VERSION__}:`)) {
    currentUrl.searchParams.delete(refreshParam)
    window.history.replaceState(window.history.state, '', currentUrl)
  }

  let checking = false
  let refreshing = false
  let availableVersion = ''
  let notice: HTMLDivElement | undefined

  function showUpdate(version: string) {
    availableVersion = version
    if (notice) return
    notice = document.createElement('div')
    notice.className = 'site-update-notice'
    notice.setAttribute('role', 'status')
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = '页面已更新，点击刷新'
    button.addEventListener('click', () => {
      const target = new URL(window.location.href)
      // 每次点击使用独立地址，部署传播期间再次点击也能重新获取页面。
      target.searchParams.set(refreshParam, `${availableVersion}:${Date.now()}`)
      refreshing = true
      button.disabled = true
      button.textContent = '正在刷新…'
      window.location.replace(target)
    })
    notice.append(button)
    document.body.append(notice)
  }

  async function checkVersion() {
    if (checking || refreshing || document.visibilityState !== 'visible') return
    checking = true
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8_000)
    try {
      const url = new URL(`${import.meta.env.BASE_URL}version.json`, window.location.origin)
      // Pages 的缓存响应头由托管服务控制，独立参数确保版本检查绕过缓存。
      url.searchParams.set('t', String(Date.now()))
      const response = await fetch(url, { cache: 'no-store', signal: controller.signal })
      if (!response.ok) return
      const { version } = await response.json()
      if (typeof version !== 'string' || !version || version === __SITE_VERSION__) return
      showUpdate(version)
    } catch {
      // 网络恢复后继续检查，当前页面保持可读。
    } finally {
      window.clearTimeout(timeout)
      checking = false
    }
  }

  void checkVersion()
  window.setInterval(() => void checkVersion(), interval)
  document.addEventListener('visibilitychange', () => void checkVersion())
  window.addEventListener('pageshow', () => void checkVersion())
}
