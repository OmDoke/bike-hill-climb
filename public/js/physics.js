const gravity = 0.5;
const friction = 0.98;

const physics = {
    applyPhysics: (bike) => {
        bike.velocity += gravity;
        bike.y += bike.velocity;
        bike.speed += bike.acceleration;
        bike.speed *= friction;
        bike.x += bike.speed;

        if (bike.y > 300) {
            bike.y = 300;
            bike.velocity = 0;
        }
    }
};
