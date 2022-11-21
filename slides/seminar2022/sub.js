Reveal.on("ready", () => {
    const numImg = 2;
    const options = {
        duration: 2000,
        easing: "steps(2, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        const elementAnimation = document.getElementById(
            "quasimode_animation_" + i
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});

Reveal.on("ready", () => {
    const numImg = 4;
    const options = {
        duration: 2000,
        easing: "steps(4, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        const elementAnimation = document.getElementById(
            "plasma_animation_" + i
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});

Reveal.on("ready", () => {
    const numImg = 3;
    const options = {
        duration: 2500,
        easing: "steps(3, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        const elementAnimation = document.getElementById(
            "landau_animation_" + i
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});

Reveal.on("ready", () => {
    const numImg = 4;
    const options = {
        duration: 2500,
        easing: "steps(4, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        const elementAnimation = document.getElementById(
            "landau_animation2_" + i
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});

Reveal.on("ready", () => {
    const startButton = document.getElementById("phasemixing_start");
    const stopButton = document.getElementById("phasemixing_stop");
    const resetButton = document.getElementById("phasemixing_reset");
    let nIntervId;

    const canvas = document.getElementById("phasemixing_canvas");
    let ctx = canvas.getContext("2d");

    const scale = window.devicePixelRatio * 2;
    const width = Math.floor(canvas.width * scale);
    const height = Math.floor(canvas.height * scale);
    canvas.width = Math.floor(width);
    canvas.height = Math.floor(height);

    const realWidth = parseInt(canvas.style.width);
    const realHeight = parseInt(canvas.style.height);
    const aspect = (2 * realHeight) / realWidth;

    const numV = 20;
    const numX = numV * 8 - 1;

    let f = new Array(numV);
    let r = new Array(numV);
    let g = new Array(numV);
    let b = new Array(numV);
    for (let i = 0; i < 2 * numV + 1; i++) {
        f[i] = new Array(numX);
        r[i] = new Array(numX);
        g[i] = new Array(numX);
        b[i] = new Array(numX);
    }
    let n = new Array(numX);

    const blockStart = [0.1 * width, 0.05 * height];
    const blockSize = (width - 2 * blockStart[0]) / (numX + 1);
    const blockWidth = blockSize;
    const blockHeight = blockSize / aspect;

    const graphWidth = blockWidth * (numX + 1);
    const upperGraph = [
        blockStart[1],
        blockStart[1] + blockHeight * (2 * numV + 1),
    ];
    const underGraph = [upperGraph[0] + upperGraph[1], height - upperGraph[0]];

    const init = () => {
        for (let i = 0; i < 2 * numV + 1; i++) {
            let numParticle;
            if (i <= numV) {
                numParticle = i + 1;
            } else if (i > numV) {
                numParticle = 2 * numV + 1 - i;
            }

            for (let j = 0; j < numX + 1; j++) {
                if (j <= numV) {
                    f[i][j] = j * numParticle;
                } else if (numV < j && j <= 3 * numV) {
                    f[i][j] = (2 * numV - j) * numParticle;
                } else if (3 * numV < j && j <= 5 * numV) {
                    f[i][j] = (j - 4 * numV) * numParticle;
                } else if (5 * numV < j && j <= 7 * numV) {
                    f[i][j] = (6 * numV - j) * numParticle;
                } else {
                    f[i][j] = (j - 8 * numV) * numParticle;
                }
            }
        }

        return f;
    };

    const sum = (f) => {
        n.fill(0);
        for (let j = 0; j < numX + 1; j++) {
            for (let i = 0; i < 2 * numV + 1; i++) {
                n[j] += f[i][j];
            }
        }

        return n;
    };

    const draw = (f) => {
        let maxF = Math.max(...f[numV]);

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.rect(
            blockStart[0],
            upperGraph[0],
            graphWidth,
            upperGraph[1] - upperGraph[0]
        );
        ctx.fillStyle = "black";
        ctx.lineWidth = 1.5 * scale;
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(
            blockStart[0],
            underGraph[0],
            graphWidth,
            underGraph[1] - underGraph[0]
        );
        ctx.fillStyle = "black";
        ctx.lineWidth = 0.5 * scale;
        ctx.stroke();

        n = sum(f);
        for (let j = 0; j < numX + 1; j++) {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillRect(
                blockStart[0] + blockWidth * j,
                underGraph[0] + (underGraph[1] - underGraph[0]) / 2,
                blockWidth,
                Math.floor(
                    (-n[j] / maxN) * ((underGraph[1] - underGraph[0]) / 2)
                )
            );
        }

        let color;
        let sign;
        let item;
        let velocity;
        for (let i = 0; i < 2 * numV + 1; i++) {
            for (let j = 0; j < numX + 1; j++) {
                sign = Math.sign(f[i][j]);
                color = Math.round((255 * (sign * f[i][j])) / maxF);

                if (sign > 0) {
                    r[i][j] = 255 - color;
                    g[i][j] = 255 - color;
                    b[i][j] = 255;
                } else if (sign < 0) {
                    r[i][j] = 255;
                    g[i][j] = 255 - color;
                    b[i][j] = 255 - color;
                } else {
                    r[i][j] = 255;
                    g[i][j] = 255;
                    b[i][j] = 255;
                }

                ctx.beginPath();
                ctx.fillStyle = `rgb(${r[i][j]},${g[i][j]},${b[i][j]})`;
                ctx.fillRect(
                    blockStart[0] + blockWidth * j,
                    blockStart[1] + blockHeight * i,
                    blockWidth,
                    blockHeight
                );
            }

            velocity = numV - i;
            for (let k = 0; k < Math.abs(velocity); k++) {
                if (velocity > 0) {
                    item = f[i].pop();
                    f[i].unshift(item);
                } else if (velocity < 0) {
                    item = f[i].shift();
                    f[i].push(item);
                }
            }
        }

        return f;
    };

    startButton.addEventListener("click", () => {
        if (!nIntervId) {
            nIntervId = setInterval(() => {
                f = draw(f);
            }, 1000);
        }
    });

    stopButton.addEventListener("click", () => {
        clearInterval(nIntervId);
        nIntervId = null;
    });

    resetButton.addEventListener("click", () => {
        clearInterval(nIntervId);
        nIntervId = null;
        f = init();
        f = draw(f);
    });

    f = init();
    n = sum(f);
    maxN = n[numV];
    f = draw(f);
});

Reveal.on("ready", () => {
    const numImg = 3;
    const options = {
        duration: 2500,
        easing: "steps(3, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        const elementAnimation = document.getElementById(
            "vortex_animation_" + i
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});

Reveal.on("ready", () => {
    const numImg = 3;
    const options = {
        duration: 2500,
        easing: "steps(3, jump-none)",
        iterations: Infinity,
    };
    const keyframesBase = new Array(numImg).fill({ opacity: 0 });

    for (let i = 1; i < numImg + 1; i++) {
        j = i + 3;
        const elementAnimation = document.getElementById(
            "vortex_animation_" + j
        );
        let keyframes = keyframesBase.slice();
        keyframes[i - 1] = { opacity: 1 };

        elementAnimation.animate(keyframes, options);
    }
});
