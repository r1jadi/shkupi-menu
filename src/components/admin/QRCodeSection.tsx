import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "@/i18n/LanguageContext";

export function QRCodeSection() {
  const menuUrl = window.location.origin;
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-display font-semibold text-foreground">{t("admin.tabs.qr")}</h2>
        <p className="text-muted-foreground font-body text-sm mt-1">
          {t("admin.qr.instructions")}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-8 bg-card rounded-2xl border border-border">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <QRCodeSVG
            value={menuUrl}
            size={200}
            bgColor="#ffffff"
            fgColor="#2d1810"
            level="H"
            includeMargin={false}
          />
        </div>

        <div className="text-center">
          <p className="font-display font-semibold text-foreground text-lg">{t("admin.qr.scanToView")}</p>
          <p className="text-muted-foreground font-body text-sm mt-1">Restaurant Shkupi</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              const svg = document.querySelector(".qr-print-area svg");
              if (!svg) return;
              const svgData = new XMLSerializer().serializeToString(svg);
              const blob = new Blob([svgData], { type: "image/svg+xml" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "shkupi-menu-qr.svg";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("admin.qr.downloadSvg")}
          </button>
        </div>

        <div className="qr-print-area hidden">
          <QRCodeSVG value={menuUrl} size={400} bgColor="#ffffff" fgColor="#2d1810" level="H" />
        </div>
      </div>

      <div className="p-4 bg-muted/50 rounded-xl">
        <p className="text-sm font-body text-muted-foreground">
          <strong className="text-foreground">{t("admin.qr.menuUrl")}</strong>{" "}
          <code className="text-primary">{menuUrl}</code>
        </p>
      </div>
    </div>
  );
}
