import Tooltip from "@/components/Tooltip/Tooltip";
import { useState } from "react";


const TooltipPage = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-10 lg:px-16 rounded">
      
      {/* Header */}
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Tooltip
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
          Tooltips provide additional information when users hover over an
          element.
        </p>

        {/* Basic Tooltip */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            Basic Tooltip
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Hover over the button to see the tooltip.
          </p>

          <div className="mt-6 flex min-h-40 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
            <Tooltip content="This is a tooltip">
              <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
                Hover me
              </button>
            </Tooltip>
          </div>
        </section>

       <button
    onClick={() => setShowCode(!showCode)}
    className="mt-4 text-sm font-medium text-blue-600 hover:underline"
  >
    {showCode ? "Hide Code" : "View Code"}
  </button>

  {showCode && (
    <div className="mt-4 rounded-xl bg-gray-900 p-5">
      <pre className="overflow-x-auto text-sm text-gray-100">
        <code>{`
            <div className="relative inline-block"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
            {children}
            {show && (
              <span
                 className={absolute {positionClasses[position]}
                 whitespace-nowrap rounded bg-black px-3 py-1.5 
                 text-sm text-white transition-opacity duration-200}
              >
            {content}
              <span
                className={absolute h-2 w-2 rotate-45 bg-black {arrowClasses[position]}}
              />
              </span>
            )}
            </div>
            `}</code>
      </pre>
    </div>
  )}
        {/* Positions */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Tooltip Positions
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Tooltips can be displayed on different sides of an element.
          </p>

          <div className="mt-6 grid min-h-56 grid-cols-2 gap-6 rounded-xl border border-gray-200 bg-gray-50 p-8 md:grid-cols-4">
            
            {/* Top */}
            <div className="flex items-center justify-center">
              <Tooltip content="Tooltip on top" position="top">
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
                  Top
                </button>
              </Tooltip>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-center">
              <Tooltip content="Tooltip on bottom" position="bottom">
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
                  Bottom
                </button>
              </Tooltip>
            </div>

            {/* Left */}
            <div className="flex items-center justify-center">
              <Tooltip content="Tooltip on left" position="left">
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
                  Left
                </button>
              </Tooltip>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center">
              <Tooltip content="Tooltip on right" position="right">
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
                  Right
                </button>
              </Tooltip>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default TooltipPage;