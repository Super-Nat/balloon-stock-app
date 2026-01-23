const ScannerOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center flex-col ">
      <div className="scanner-header w-full z-10 mb-8">
        <div className="w-full text-center text-white">
          <h1 className="text-[32px] font-bold mb-2">Scan Code</h1>
          <p className="text-sm">
            Align QR or Barcode in the box
            <br />
            to manage product stock
          </p>
        </div>
      </div>
      <div className=" relative w-[300px] aspect-square rounded-xl shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]" />
    </div>
  );
};

export default ScannerOverlay;
