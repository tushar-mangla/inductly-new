export default function RetroGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [perspective:250px]">
      <div className="absolute inset-0 [transform:rotateX(75deg)]">
        <div
          className="absolute inset-[-200%] origin-top animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(13, 13, 13, 0.08) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(13, 13, 13, 0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--paper)_48%,transparent_80%)] pointer-events-none" />
    </div>
  );
}
