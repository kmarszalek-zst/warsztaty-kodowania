"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";

export default function PrintChallengeButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  async function downloadPdf() {
    const section = document.getElementById("wyzwanie-2");

    if (!section) {
      setError("Nie udało się znaleźć instrukcji wyzwania.");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const [{ toCanvas }, { default: jsPDF }] = await Promise.all([
        import("html-to-image"),
        import("jspdf"),
      ]);
      const canvas = await toCanvas(section, {
        pixelRatio: 1.5,
        filter: (node) =>
          !(node instanceof HTMLElement && node.dataset.pdfIgnore === "true"),
      });
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const margin = 10;
      const contentWidth = pdf.internal.pageSize.getWidth() - margin * 2;
      const contentHeight = pdf.internal.pageSize.getHeight() - margin * 2;
      const pageCanvasHeight = Math.floor(
        (canvas.width * contentHeight) / contentWidth,
      );

      for (let sourceY = 0; sourceY < canvas.height; sourceY += pageCanvasHeight) {
        const sliceHeight = Math.min(pageCanvasHeight, canvas.height - sourceY);
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = pageCanvasHeight;
        const context = pageCanvas.getContext("2d");

        if (!context) {
          throw new Error("Nie udało się przygotować strony PDF.");
        }

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight,
        );

        if (sourceY > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          pageCanvas.toDataURL("image/jpeg", 0.9),
          "JPEG",
          margin,
          margin,
          contentWidth,
          (sliceHeight * contentWidth) / canvas.width,
        );
      }

      pdf.save("wyzwanie-2-instrukcja.pdf");
    } catch (cause) {
      console.error("Nie udało się wygenerować PDF wyzwania:", cause);
      setError(
        cause instanceof Error
          ? `Nie udało się utworzyć PDF: ${cause.message}`
          : "Nie udało się utworzyć PDF. Spróbuj ponownie.",
      );
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={downloadPdf}
        disabled={isGenerating}
        className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-violet-800 px-5 py-3 font-bold text-white transition hover:bg-violet-900 disabled:cursor-wait disabled:opacity-70"
      >
        <FiDownload aria-hidden="true" />
        {isGenerating ? "Tworzenie PDF..." : "Pobierz instrukcję jako PDF"}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </>
  );
}
