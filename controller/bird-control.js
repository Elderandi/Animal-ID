angular.module('animalid')
  .controller('birdControl', function($scope) {

        function Bird(x, y, vx, vy, speed, size, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.svx = vx;
            this.vy = vy;
            this.svy = vy;
            this.speed = speed;
            this.size = size;
            this.color = color;
            this.reset = false;
            this.yoffset = Math.random() * (this.size / 4) - this.size / 8;
        }
        Bird.prototype = {
            constructor: Bird,
            update: function (height, width) {
                this.x += this.vx;
                this.y += this.vy;
                if (this.reset) {
                    this.vx = this.svx;
                    this.vy = this.svy;
                    this.reset = false;
                }
                if (mx && my) {
                    var dx = mx - this.x,
                        dy = my - this.y,
                        d = Math.sqrt(dx * dx + dy * dy),
                        a = Math.atan2(dy, dx);
                    var speed = d / 100;
                    this.vx = Math.cos(a + (Math.random() * 2 - 1)) * (speed + this.svx);
                    this.vy = Math.sin(a + (Math.random() * 2 - 1)) * (speed + this.svy);
                } else {
                    // this is ugly.. i'll be doing something else with the checks later.
                    if (this.x - this.size / 2 - this.yoffset / 2 < 0) {
                        this.vx *= -1;
                    }
                    if (this.x + this.size / 2 + this.yoffset / 2 > width) {
                        this.vx *= -1;
                    }
                    if (this.y - this.size / 5 + this.yoffset < 0) {
                        this.vy *= -1;
                    }
                    if (this.y - this.size / 5 + this.yoffset > height) {
                        this.vy *= -1;
                    }
                }
                this.yoffset += this.speed;

                if (Math.abs(this.yoffset) > this.size / 8) {
                    this.speed *= -1;
                }
            },
            render: function (context) {
                context.beginPath();
                context.strokeStyle = this.color;
                context.moveTo(this.x, this.y);
                context.quadraticCurveTo(this.x - this.size / 4, this.y - this.size / 5 + this.yoffset, this.x - this.size / 2 - this.yoffset / 2, this.y + this.yoffset);
                context.stroke();
                context.moveTo(this.x, this.y);
                context.quadraticCurveTo(this.x + this.size / 4, this.y - this.size / 5 + this.yoffset, this.x + this.size / 2 + this.yoffset / 2, this.y + this.yoffset);
                context.stroke();
                context.closePath();
            }
        };
        var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d'),
            height, width, xm, my, birds;
        setTimeout(init, 10);

        function init() {
            height = canvas.height = canvas.parentNode.offsetHeight;
            width = canvas.width = canvas.parentNode.offsetWidth;
            mx = null;
            my = null;
            birds = [];
        for (var i = 0; i < 33; i++) {
                var x = Math.random() * width,
                    y = Math.random() * height,
                    vx = Math.random() * 2 - 1,
                    vy = Math.random() * 2 - 1,
                    size = Math.random() * 9 + 17,
                    speed = size / 40,
                    color = 'rgba('+~~(Math.random()*00)+','+~~(Math.random()*00)+','+~~(Math.random()*00)+',.5)';
                var bird = new Bird(x, y, vx, vy, speed, size, color);
                birds.push(bird);
            }

            update();
            render();
            canvas.addEventListener('mousedown', function (e) {
                listen(e);
                canvas.addEventListener('mousemove', listen, false);
            }, false);
            canvas.addEventListener('mouseup', function () {
                canvas.removeEventListener('mousemove', listen, false);
                mx = null;
                my = null;
                for (var i = 0, l = birds.length; i < l; i++) {
                    birds[i].reset = true;
                }
            }, false);
        }

        function listen(e) {
            mx = e.clientX;
            my = e.clientY;

        }

        function update() {
            for (var i = 0, l = birds.length; i < l; i++) {
                birds[i].update(height, width);
            }
            setTimeout(update, 1000 / 30);
        }

        function render() {
            context.clearRect(0, 0, width, height);
            for (var i = 0, l = birds.length; i < l; i++) {
                birds[i].render(context);
            }
            requestAnimationFrame(render);
        }

});