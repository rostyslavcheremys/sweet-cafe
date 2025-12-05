import { useEffect } from "react";

import gsap from "gsap";

export const useSparks = (sparksRef, options) => {
    const { count, color, size, speed } = options;

    useEffect(() => {
        if (!sparksRef.current) return;

        const sparksContainer = sparksRef.current;
        const sparks = [];

        for (let i = 0; i < count; i++) {
            const spark = document.createElement("div");

            spark.className = "spark";
            spark.style.position = "absolute";
            spark.style.left = `${Math.random() * 100}%`;
            spark.style.top = `${Math.random() * 100}%`;
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.backgroundColor = color;
            spark.style.borderRadius = "50%";
            spark.style.opacity = 0.8;

            sparksContainer.appendChild(spark);
            sparks.push(spark);
        }

        sparks.forEach(spark => {
            gsap.to(spark, {
                x: "+=" + (Math.random() * 100 - 50),
                y: "+=" + (Math.random() * 100 - 50),
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5,
                duration: Math.random() * speed + 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        return () => {
            sparks.forEach(spark => sparksContainer.removeChild(spark));
        };
    }, [sparksRef, count, color, size, speed]);
};
