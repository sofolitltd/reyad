
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({ title: 'Copied to clipboard!' });
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="relative my-4">
      <div className="bg-muted/40 rounded-t-lg px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Code</span>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
          {hasCopied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre className="language-dart bg-muted/40 rounded-b-lg p-4 text-sm font-code h-full overflow-x-auto whitespace-pre-wrap mt-0">
        <code>{code}</code>
      </pre>
    </div>
  );
}
