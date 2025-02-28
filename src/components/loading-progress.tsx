"use client"

import { useEffect } from "react"
import NProgress from "nprogress"

export function LoadingProgress() {

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
      minimum: 0.3,
    })
  }, [])

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    NProgress.done()
    // Start progress bar when route changes
    return () => {
      NProgress.start()
    }
  }, [])

  return null
}

