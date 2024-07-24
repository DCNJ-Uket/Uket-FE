"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@ui/components/ui/toast"
import { useToast } from "@ui/components/ui/use-toast"

interface ToasterProps {
  className?:string;
}

export function Toaster(props: ToasterProps){
  const { toasts } = useToast()
  const {className}=props;

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className={className}/>
    </ToastProvider>
  )
}
