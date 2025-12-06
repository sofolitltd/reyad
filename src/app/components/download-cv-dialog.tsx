
'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DownloadCvDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DownloadCvDialog({ open, onOpenChange }: DownloadCvDialogProps) {
  const handleDownloadConfirm = () => {
    const link = document.createElement('a');
    link.href = '/Md%20Asifuzzaman%20Reyad%20-%20dev%2012-25.pdf';
    link.download = 'Md Asifuzzaman Reyad - dev 12-25.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download CV</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to download Md Asifuzzaman Reyad's CV. Do you want to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDownloadConfirm}>Download</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
