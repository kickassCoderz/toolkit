import { useState } from "react";

import { useInterval } from "~shared/hooks/use-interval";
import { useIsFirstMount } from "~shared/hooks/use-is-first-mount";
import { css } from "~styled-system/css";

const bgStyles = css({
    // position: "absolute",
    // inset: "0",
    zIndex: "-10",
    overflow: "hidden",
    blur: "3xl",
    filter: "auto",
    width: "full",
    height: "calc({sizes.viewportHeight} - {sizes.16})",
    position: "fixed",
    top: "16",
});

const gradientStyles = css({
    aspectRatio: "1/7",
    height: "full",
    width: "full",
    bgGradient: "to-r",
    gradientFrom: "accent.9",
    gradientTo: "white/10",
    opacity: "0.3",
    transition: "clip-path 3s",
});

function createPoints(ammount = 16): Array<[number, number]> {
    return Array.from({ length: ammount })
        .fill(0)
        .map(() => [Math.random(), Math.random()]);
}

function interpolatePoint(value: number) {
    return Math.random() > 0.5 ? value + (Math.random() - 0.5) / 2 : Math.random();
}

function interpolatePoints(points: Array<[number, number]>): Array<[number, number]> {
    return points.map((point) => [interpolatePoint(point[0]), interpolatePoint(point[1])]);
}

function createPoly(points: Array<[number, number]>): string {
    return points.map(([x, y]) => `${(x * 100).toString()}% ${(y * 100).toString()}%`).join(", ");
}

export function AnimatedBackground() {
    const isFirstMount = useIsFirstMount();
    const [points, setPoints] = useState(() => createPoints());

    useInterval(
        () => {
            setPoints(interpolatePoints(points));
        },
        isFirstMount ? 0 : 3000
    );

    const poly = createPoly(points);

    return (
        <div className={bgStyles}>
            <div className={gradientStyles} style={{ clipPath: `polygon(${poly})` }} />
        </div>
    );
}
