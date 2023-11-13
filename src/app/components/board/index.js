"use client"
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Board() {
  const { chosenColor, size } = useSelector((state) => state.tool);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.strokeStyle = chosenColor;
    context.lineWidth = size;

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [chosenColor, size, isDrawing]);

  return <canvas ref={canvasRef}></canvas>;
}

