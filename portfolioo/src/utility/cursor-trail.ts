import { RefObject } from "react";

export type CursorTrail = {
  ref: RefObject<HTMLCanvasElement>;
  color?: string;
};

export function cursorTrail(props: CursorTrail) {
  const colorRaw = getComputedStyle(document.documentElement).getPropertyValue(
    "--accent"
  );
  const accentColor = `hsla(${
    colorRaw ? colorRaw.split(" ").join(",") : "0, 0%, 0%"
  }, 0.35)`;
  const { ref, color } = props;
  const ctx = ref.current?.getContext("2d")!;

  let cursorPosition = {
    x: 0,
    y: 0,
  };

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  function move(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    } else {
      cursorPosition.x = event.touches[0].pageX;
      cursorPosition.y = event.touches[0].pageY;
    }
    event.preventDefault();
    drawCursor();
  }

  function drawCursor() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color || accentColor;
    ctx.beginPath();
    ctx.arc(cursorPosition.x, cursorPosition.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }

  function renderCursorTrail() {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  function cleanUp() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", move);
    window.removeEventListener("resize", resizeCanvas);
  }

  return { cleanUp, renderCursorTrail };
}
