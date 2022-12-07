window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas ? canvas.getContext('2d') : null; // update the expression later with eslint

    canvas.width = 1500;
    canvas.heigh = 500;

    class InputHandler {
        constructor(game) {
            this.game = game;
            window.addEventListener('keydown', (e) => {
                console.log(e.key);
            })
        }
    }

    class Projectile {

    }

    class Particle {

    }

    class Player {
        constructor(game) {
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 1;
        }

        update() {
            this.y += this.speedY;
        }

        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }

    }

    class Enemy {

    }

    class Layer {

    }

    class Background {

    }

    class UI {

    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler(this);
        }

        update() {
            this.player.update();
        }

        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.heigh);
        game.update();
        game.draw(context);
        requestAnimationFrame(animate);
    }

    animate();
});
