"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(31 33 40)",
  gradientBackgroundEnd = "rgb(23 23 23)",
  x = "50%",
  y = "50%",
  x1 = x,
  y1 = y,
  x2 = x,
  y2 = y,
  x3 = x,
  y3 = y,
  x4 = x,
  y4 = y,
  x5 = x,
  y5 = y,
  firstColor = "18, 113, 255",
  secondColor = "101, 74, 255",
  thirdColor = "100, 167, 255",
  fourthColor = "50, 50, 200",
  fifthColor = "68, 50, 161",
  pointerColor = "140, 100, 255",
  size = "120%",
  blendingValue = "multiply",
  children,
  className,
  interactive = false,
  animate = false,
  containerClassName,
  colorsClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  x?: `${number}%`;
  y?: `${number}%`;
  x1?: `${number}%`;
  y1?: `${number}%`;
  x2?: `${number}%`;
  y2?: `${number}%`;
  x3?: `${number}%`;
  y3?: `${number}%`;
  x4?: `${number}%`;
  y4?: `${number}%`;
  x5?: `${number}%`;
  y5?: `${number}%`;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  animate?: boolean;
  containerClassName?: string;
  colorsClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
    document.body.style.setProperty("--x1Position", x1);
    document.body.style.setProperty("--y1Position", y1);
    document.body.style.setProperty("--x2Position", x2);
    document.body.style.setProperty("--y2Position", y2);
    document.body.style.setProperty("--x3Position", x3);
    document.body.style.setProperty("--y3Position", y3);
    document.body.style.setProperty("--x4Position", x4);
    document.body.style.setProperty("--y4Position", y4);
    document.body.style.setProperty("--x5Position", x5);
    document.body.style.setProperty("--y5Position", y5);
  }, [
    blendingValue,
    fifthColor,
    firstColor,
    fourthColor,
    gradientBackgroundEnd,
    gradientBackgroundStart,
    pointerColor,
    secondColor,
    size,
    thirdColor,
    x,
    y,
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    x4,
    y4,
    x5,
    y5,
  ]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-fit min-h-[100vh] min-w-fit w-full bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative w-full h-full z-50", className)}>
        {children}
      </div>
      <div
        className={cn(
          "gradients-container h-full w-full overflow-hidden fixed z-0 top-0 left-0 blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(100px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(var(--y1Position)-var(--size)/2)] left-[calc(var(--x1Position)-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            animate && `animate-first`,
            colorsClassName
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(var(--y2Position)-var(--size)/2)] left-[calc(var(--x2Position)-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            animate && `animate-second`,
            colorsClassName
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(var(--y3Position)-var(--size)/2)] left-[calc(var(--x3Position)-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            animate && `animate-third`,
            colorsClassName
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(var(--y4Position)-var(--size)/2)] left-[calc(var(--x4Position)-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            animate && `animate-fourth`,
            colorsClassName
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(var(--y5Position)-var(--size)/2)] left-[calc(var(--x5Position)-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            animate && `animate-fifth`,
            colorsClassName
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              colorsClassName
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
