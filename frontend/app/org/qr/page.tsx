"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRDialog({ campaignUrl }: { campaignUrl: string }) {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.download = "campaign-qr.png";
      link.href = canvasRef.current.toDataURL(); // Get the data URL from the canvas
      link.click();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Generate QR
          <QrCode className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Campaign QR Code</DialogTitle>
          <DialogDescription>
            Share this QR to allow others to visit the donation page.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center py-4">
          {/* Render the QR code on a canvas */}
          <QRCodeCanvas
            value={campaignUrl}
            size={200}
            ref={canvasRef} // Assign the ref to the QRCode component
          />
        </div>

        <Button className="w-full" onClick={downloadQR}>
          Download QR Code
        </Button>
      </DialogContent>
    </Dialog>
  );
}
