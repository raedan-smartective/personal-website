"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface FullscreenViewerProps {
  isOpen: boolean
  onClose: () => void
  src: string
  type: "pdf" | "image"
  alt?: string
  rotation?: number
}

export function FullscreenViewer({ isOpen, onClose, src, type, alt, rotation }: FullscreenViewerProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Add toolbar hiding parameters to PDF URLs
  const pdfSrc = type === "pdf" && !src.includes("#") ? `${src}#toolbar=0&navpanes=0&scrollbar=0` : src

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full p-4 lg:p-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {type === "pdf" ? (
              <iframe
                src={pdfSrc}
                className="w-full h-full border-0 rounded-lg bg-white"
                title="Fullscreen PDF Viewer"
              />
            ) : (
              <img
                src={src}
                alt={alt || "Fullscreen image"}
                className="max-w-full max-h-full object-contain"
                style={{
                  transform: rotation ? `rotate(${rotation}deg)` : undefined,
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
