"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

 
    const link = document.createElement("a")
    link.href = "https://drive.google.com/file/d/1Q8t1rjBpuIX0P-L15Kz5v_myQO8lJs2D/view?usp=drive_link" // Path to your resume PDF in the public folder
    link.download = "JEET_GARALA_CV.pdf" 
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    
    setTimeout(() => {
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <Button variant="outline" className="ml-auto gap-2" onClick={handleDownload} disabled={isDownloading}>
      {isDownloading ? (
        <>
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Resume
        </>
      )}
    </Button>
  )
}
