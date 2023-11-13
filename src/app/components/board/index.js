"use client"
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Board() {
  const { chosenColor, size } = useSelector((state) => state.tool);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawing, setDrawing] = useState([]);
  console.log(chosenColor, size)
  
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = chosenColor;
    context.lineWidth = size;

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      setDrawing((prevDrawing) => [
        ...prevDrawing,
        { type: "start", x: e.clientX, y: e.clientY },
      ]);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      setDrawing((prevDrawing) => [
        ...prevDrawing,
        { type: "draw", x: e.clientX, y: e.clientY },
      ]);
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

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawing.forEach((item) => {
      if (item.type === "start") {
        context.beginPath();
        context.moveTo(item.x, item.y);
      } else if (item.type === "draw") {
        context.lineTo(item.x, item.y);
        context.stroke();
      }
    });
  }, [drawing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
   
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

