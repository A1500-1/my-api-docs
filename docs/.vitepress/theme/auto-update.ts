declare const __SITE_VERSION__: string

const refreshParam = '__site_version'
const interval = 60_000

export function startAutoUpdate() {
  const currentUrl = new URL(window.location.href)
  if (currentUrl.searchParams.get(refreshParam) === __SITE_VERSION__) {
    currentUrl.searchParams.delete(refreshParam)
    window.history.replaceState(window.history.state, '', currentUrl)
  }

  let checking = false
  let refreshing = false

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
      const target = new URL(window.location.href)
      // 部署传播期间 HTML 可能落后于版本文件，同一版本只自动跳转一次。
      if (target.searchParams.get(refreshParam) === version) return
      target.searchParams.set(refreshParam, version)
      refreshing = true
      window.location.replace(target)
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
