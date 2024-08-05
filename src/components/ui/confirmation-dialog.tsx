import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ConfirmationDialogProps {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onClose: () => void
  closeBtnText?: string
  confirmBtnText?: string
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  message,
  onConfirm,
  onClose,
  closeBtnText = 'Cancel',
  confirmBtnText = 'Confirm',
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{message}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            {closeBtnText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.stopPropagation()
              onConfirm()
            }}
          >
            {confirmBtnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
