
'use client';

import parse, { DOMNode, Element, domToReact } from 'html-react-parser';
import { CodeBlock } from './code-block';

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.name === 'pre') {
        const codeChild = domNode.children.find(
          child => child instanceof Element && child.name === 'code'
        ) as Element | undefined;
        
        if (codeChild && codeChild.children[0] && 'data' in codeChild.children[0]) {
          const code = codeChild.children[0].data;
          return <CodeBlock code={code.trim()} />;
        }
      }
      return domNode;
    },
  };

  const parsedContent = parse(content, options);

  return (
    <div className="prose prose-invert prose-lg max-w-none mx-auto text-foreground">
      {typeof parsedContent === 'string' ? parsedContent : domToReact(parsedContent as DOMNode[])}
    </div>
  );
}
