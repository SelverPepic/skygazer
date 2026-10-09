import React, { useEffect, useRef, useState } from 'react'

export default function SkygazerApp({ appId }) {
  const frameRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    setReady(false)
    setFailed(false)
    const frame = frameRef.current
    const onMessage = (event) => {
      if (event.source !== frame?.contentWindow || event.origin !== 'null') return
      if (event.data?.type === 'mobius:cloudwatch:ready') setReady(true)
    }
    window.addEventListener('message', onMessage)
    const timeout = window.setTimeout(() => setFailed(true), 12000)
    return () => { window.removeEventListener('message', onMessage); window.clearTimeout(timeout) }
  }, [appId, attempt])
  const src = `/app-embeds/by-id/${appId}/index.html${attempt ? `?retry=${attempt}` : ''}`
  return <div className="cw-wrap">
    <style>{`.cw-wrap{position:relative;width:100%;height:100%;min-height:360px;background:var(--bg,#10121f);color:var(--text,#f4f4ee);font-family:var(--font,system-ui);overflow:hidden}.cw-wrap iframe{width:100%;height:100%;border:0;display:block;visibility:hidden}.cw-wrap iframe.cw-ready{visibility:visible}.cw-state{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:12px;text-align:center;background:var(--bg,#10121f);z-index:1}.cw-state p{color:var(--muted,#9da6aa);max-width:34ch}.cw-state button{min-height:44px;padding:0 18px;border:1px solid var(--border,#52616a);border-radius:999px;background:var(--surface,#222b32);color:var(--text,#fff);font:inherit;cursor:pointer}.cw-state button:focus-visible{outline:3px solid var(--accent,#74d6cf);outline-offset:3px}`}</style>
    {!ready && <div className="cw-state"><strong>{failed ? 'Skygazer didn’t finish loading.' : 'Opening Skygazer…'}</strong>{failed && <><p>Try again when your connection is ready.</p><button onClick={() => setAttempt(n => n + 1)}>Retry</button></>}</div>}
    <iframe ref={frameRef} className={ready ? 'cw-ready' : ''} title="Skygazer" src={src} />
  </div>
}
