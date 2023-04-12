import Image from "next/image";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const AI_RESPONSE = "```js\nimport React from 'react';\n\nconst MyComponent = () => {\n  return <div>I'm a simple component!</div>;\n};\n\nexport default MyComponent;\n```\n\nThis example is a basic React component. It imports the React library, defines a component function, and returns a DOM element. Finally, the component is exported so it can be imported and used in other components.";

const INLINE_CODE = "```jsx\nfunction a(){}\n```";

export default function Message({text: initialText, avatar, idx, author}) {
  const [text, setText] = useState(author === "ai" ? "" : initialText);
  const bgColorClass = idx % 2 === 0 ? "bg-slate-100" : "bg-slate-200";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(initialText.slice(0, text.length + 1));
    }, 25);

    return () => clearTimeout(timeout);
  });

  const blinkingCursorClass = initialText.length === text.length ? "" : "blinking-cursor";

  return (
    <div className={`flex flex-row ${bgColorClass} p-4`}>
      <div className="w-[30px] relative mr-4">
        <Image 
          src={avatar}
          width={30}
          height={30}
          alt=""
        />
      </div>
      <div className="w-full">
        <ReactMarkdown 
          className={blinkingCursorClass}
          components={{
            code({inline, className, children, style, ...props}) {
              debugger
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={darcula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {children}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {/* {text} */}
          {/* {AI_RESPONSE} */}
          {INLINE_CODE}
        </ReactMarkdown>
      </div>
    </div>
  )
}
