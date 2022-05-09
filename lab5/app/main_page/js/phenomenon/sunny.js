function from_sun_to_heart()
{
    const container = document.querySelector('.sun');
    const raysAmount = 12;
    const angularVelocity = 0.5;
    const downscale = 0.1;
    const rays = createRays(container, raysAmount, downscale);


    animate();

    function animate() {
        rays.forEach(ray => {
            ray.angle += angularVelocity;
            ray.elem.style.transform = `rotate(${ray.angle % 360}deg) scale(${ray.scale})`;
        });
        requestAnimationFrame(animate);
    }

    function createRays(container, amount, downscale) {
        const rays = [];
        const rotationStep = 360 / amount;
        while (amount--) {
            const angle = rotationStep * amount;
            const elem = document.createElement('div');
            elem.className = 'sun-ray';

            container.appendChild(elem);

            let scale = 1;
            if (downscale) {
                const origWidth = elem.offsetWidth, origHeight = elem.offsetHeight;
                const width = origWidth * (1 - downscale);
                const height = origHeight * (1 - downscale);
                elem.style.width = width + 'px';
                elem.style.height = height + 'px';
                scale = origWidth / width;


            }

            rays.push({elem, angle, scale});
        }
        return rays;
    }
}