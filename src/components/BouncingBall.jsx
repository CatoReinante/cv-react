import React, { useEffect, useRef } from "react";

export default function BouncingBall() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // tamaño básico
    const resize = () => {
      const w = 900,
        h = 630;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };
    resize();

    // estado de la pelota
    const ball = {
      x: 80,
      y: 60,
      vx: 180,
      vy: 0,
      r: 40,
      bounce: 0.85,
      grabbed: false,
      grabOffsetX: 0,
      grabOffsetY: 0,
    };
    const g = 900; // gravedad px/s^2
    let samples = []; // últimas muestras para estimar la velocidad del lanzamiento

    // helpers de puntero (convierte a coords del canvas en px CSS)
    const getCanvasPoint = (evt) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const clientX =
        evt.clientX ?? (evt.touches && evt.touches[0]?.clientX) ?? 0;
      const clientY =
        evt.clientY ?? (evt.touches && evt.touches[0]?.clientY) ?? 0;
      const x = ((clientX - rect.left) * scaleX) / dpr;
      const y = ((clientY - rect.top) * scaleY) / dpr;
      return { x, y };
    };

    // eventos: drag & throw
    const onPointerDown = (e) => {
      e.preventDefault?.();
      const p = getCanvasPoint(e);
      const dx = p.x - ball.x;
      const dy = p.y - ball.y;
      if (Math.hypot(dx, dy) <= ball.r + 4) {
        ball.grabbed = true;
        ball.grabOffsetX = p.x - ball.x;
        ball.grabOffsetY = p.y - ball.y;
        ball.vx = 0;
        ball.vy = 0;
        samples = [];
        if (canvas.setPointerCapture && e.pointerId != null) {
          canvas.setPointerCapture(e.pointerId);
        }
      }
    };

    const onPointerMove = (e) => {
      if (!ball.grabbed) return;
      const p = getCanvasPoint(e);
      ball.x = p.x - ball.grabOffsetX;
      ball.y = p.y - ball.grabOffsetY;
      const now = performance.now();
      samples.push({ t: now, x: ball.x, y: ball.y });
      // conservar ~80ms de historial
      const cutoff = now - 80;
      while (samples.length && samples[0].t < cutoff) samples.shift();
    };

    const onPointerUp = () => {
      if (!ball.grabbed) return;
      ball.grabbed = false;
      if (samples.length >= 2) {
        const a = samples[0];
        const b = samples[samples.length - 1];
        const dt = (b.t - a.t) / 1000;
        if (dt > 0) {
          ball.vx = (b.x - a.x) / dt;
          ball.vy = (b.y - a.y) / dt;
        }
      }
      samples = [];
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    // Soporte táctil básico
    canvas.addEventListener("touchstart", onPointerDown, { passive: false });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);

    let last = performance.now();
    const loop = (t) => {
      const dt = Math.min((t - last) / 1000, 0.033);
      last = t;

      const W = canvas.width / dpr,
        H = canvas.height / dpr,
        r = ball.r;

      // física (solo cuando no está agarrada)
      if (!ball.grabbed) {
        ball.vy += g * dt;
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;

        if (ball.x - r < 0) {
          ball.x = r;
          ball.vx = -ball.vx * ball.bounce;
        }
        if (ball.x + r > W) {
          ball.x = W - r;
          ball.vx = -ball.vx * ball.bounce;
        }
        if (ball.y - r < 0) {
          ball.y = r;
          ball.vy = -ball.vy * ball.bounce;
        }
        if (ball.y + r > H) {
          ball.y = H - r;
          ball.vy = -ball.vy * ball.bounce;
          ball.vx *= 0.99; // fricción
          if (Math.abs(ball.vy) < 10) ball.vy = 0;
        }
      }

      // dibujar
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = "#00bcd4";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, r, 0, Math.PI * 2);
      ctx.fill();

      // halo suave cuando está agarrada (opcional)
      if (ball.grabbed) {
        ctx.globalAlpha = 0.6;
        ctx.strokeStyle = "#e2e8f0";
        ctx.setLineDash([6, 6]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, r + 6, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }

      ctx.restore();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div className="container py-4">
      {/* Texto explicativo arriba */}
      <div className="text-center mb-3">
        <h2 className="h4 mb-2 mt-5">Pelota rebotando — Drag & Throw</h2>
        <p className="text-muted mb-0">
          Agarrá la pelota con el mouse (o con el dedo en móvil), arrastrala y
          soltala para
          <strong> lanzarla</strong>. Rebota con física simple en los bordes y
          cae por la gravedad.
        </p>
      </div>

      {/* Canvas centrado */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "40px auto" }}
      >
        <canvas ref={canvasRef} className="d-block" />
      </div>
    </div>
  );
}
