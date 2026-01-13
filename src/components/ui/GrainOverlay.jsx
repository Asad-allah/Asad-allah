export const GrainOverlay = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.09] mix-blend-overlay">
            <svg className="h-full w-full animate-noise" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.80"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default GrainOverlay;
