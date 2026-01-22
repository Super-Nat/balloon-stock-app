const FinderOverlay = ({ detected }: { detected?: boolean }) => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center flex-col gap-10">
      <div className="relative z-20 w-full pt-safe text-center text-white">
        <h1 className="text-2xl font-semibold">Scan Code</h1>
        <p className="mt-2 text-sm text-white/80">
          Align QR or Barcode inside frame
        </p>
      </div>

      <div className="relative w-[280px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]"></div>
    </div>
  );
};

export default FinderOverlay;
