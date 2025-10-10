"use client"

import { useEffect, useRef, useState } from "react"

interface UnicornStudioEmbedProps {
  projectId: string
  className?: string
  isBackground?: boolean
}

function UnicornStudioEmbed({ projectId, className = "", isBackground = false }: UnicornStudioEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loadingMethod, setLoadingMethod] = useState<"sdk" | "framer" | "failed">("sdk")
  const [isLoading, setIsLoading] = useState(true)
  const retryCountRef = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return



    if (loadingMethod === "framer") {
      // Try Framer embed approach
      setIsLoading(false)
      return
    }

    if (loadingMethod === "failed") {
      setIsLoading(false)
      return
    }

    // Try SDK approach first with improved implementation
    const trySDKEmbed = () => {
      if (!containerRef.current) return


      const container = containerRef.current

      // Clear any existing content
      container.innerHTML = ""

      // Create the div element with proper dimensions for background
      const embedDiv = document.createElement("div")
      embedDiv.setAttribute("data-us-project", projectId)

      if (isBackground) {
        embedDiv.style.width = "100vw"
        embedDiv.style.height = "100vh"
        embedDiv.style.position = "absolute"
        embedDiv.style.top = "0"
        embedDiv.style.left = "0"
      } else {
        embedDiv.style.width = "100%"
        embedDiv.style.height = "100%"
        embedDiv.style.minHeight = "400px"
      }

      container.appendChild(embedDiv)

      const script = document.createElement("script")
      script.type = "text/javascript"
      script.innerHTML = `
        !function(){
          if(!window.UnicornStudio){
            window.UnicornStudio={isInitialized:!1};
            var i=document.createElement("script");
            i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js";
            i.onload=function(){
              if(!window.UnicornStudio.isInitialized){
                try {
                  UnicornStudio.init().then((scenes) => {
                    window.UnicornStudio.isInitialized=!0;
                  }).catch((err) => {
                  });
                } catch (error) {
                  console.error("[v0] Error calling UnicornStudio.init():", error);
                }
              }
            };
            i.onerror=function(error){
              console.error("[v0] Failed to load UnicornStudio script:", error);
            };
            (document.head || document.body).appendChild(i);
          } else {
            if (window.UnicornStudio.init) {
              try {
                UnicornStudio.init().then((scenes) => {
                }).catch((err) => {
                });
              } catch (error) {
              }
            }
          }
        }();
      `

      container.appendChild(script)

      const timeout = isBackground ? 15000 : 10000
      setTimeout(() => {
        if (loadingMethod === "sdk") {
          // setLoadingMethod("framer")
        }
      }, timeout)

      setIsLoading(false)
    }

    trySDKEmbed()

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [projectId, loadingMethod, isBackground])

  if (loadingMethod === "framer") {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <iframe
          ref={iframeRef}
          src="https://framer.com/m/UnicornStudioEmbed-wWy9.js"
          className="w-full h-full border-0"
          style={{
            minHeight: isBackground ? "100vh" : "400px",
            width: isBackground ? "100vw" : "100%",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            setIsLoading(false)
          }}
          onError={() => {
            setLoadingMethod("failed")
          }}
        />
        {isLoading && !isBackground && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <div className="text-center space-y-2">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
              <p className="text-sm text-muted-foreground">Loading 3D model via Framer...</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (loadingMethod === "failed") {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className} flex items-center justify-center`}>
        <div className="text-center space-y-4 p-8">
          <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/20 rounded"></div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">3D Model Unavailable</h3>
            <p className="text-sm text-muted-foreground">Unable to load the 3D model. Please check your connection.</p>
            <button
              onClick={() => {
                setLoadingMethod("sdk")
                setIsLoading(true)
                retryCountRef.current = 0
              }}
              className="text-sm text-primary hover:underline"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          minHeight: isBackground ? "100vh" : "400px",
          width: isBackground ? "100vw" : "100%",
        }}
      />
      {isLoading && !isBackground && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80">
          <div className="text-center space-y-2">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="text-sm text-muted-foreground">Loading 3D model via SDK...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnicornStudioEmbed
