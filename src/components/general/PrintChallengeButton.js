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

    let renderContainer;

    try {
      const [{ toCanvas }, { default: jsPDF }] = await Promise.all([
        import("html-to-image"),
        import("jspdf"),
      ]);
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const margin = 10;
      const contentWidth = pdf.internal.pageSize.getWidth() - margin * 2;
      const contentHeight = pdf.internal.pageSize.getHeight() - margin * 2;
      const contentWidthPx = (contentWidth * 96) / 25.4;
      renderContainer = document.createElement("div");
      renderContainer.style.cssText = [
        "position:fixed",
        "left:0",
        "top:0",
        "z-index:-1",
        `width:${contentWidthPx}px`,
        "overflow:visible",
        "background:#fff",
        "pointer-events:none",
      ].join(";");
      const pdfSection = section.cloneNode(true);
      pdfSection.style.width = `${contentWidthPx}px`;
      pdfSection.style.maxWidth = "none";
      pdfSection.style.margin = "0";
      pdfSection.style.padding = "24px";
      pdfSection.style.boxSizing = "border-box";

      for (const grid of pdfSection.querySelectorAll(".grid")) {
        grid.style.gridTemplateColumns = "minmax(0, 1fr)";

        for (const child of grid.children) {
          child.style.gridColumn = "auto";
        }
      }

      for (const element of pdfSection.querySelectorAll("pre")) {
        element.style.whiteSpace = "pre-wrap";
        element.style.overflow = "visible";
        element.style.overflowWrap = "anywhere";
      }

      for (const element of pdfSection.querySelectorAll("code")) {
        element.style.overflowWrap = "anywhere";
      }

      renderContainer.append(pdfSection);
      document.body.append(renderContainer);
      await document.fonts.ready;

      const canvas = await toCanvas(pdfSection, {
        pixelRatio: 1.5,
        filter: (node) =>
          !(node instanceof HTMLElement && node.dataset.pdfIgnore === "true"),
      });
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
      renderContainer?.remove();
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
