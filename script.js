 // Create pixel snowflakes
        function createPixelSnow() {
            const snowflake = document.createElement('div');
            snowflake.className = 'pixel-snow';
            
            // Use pixel art characters for snow
            const pixelChars = ['❄', '✦', '❅', '❆', '•', '■', '□'];
            snowflake.innerHTML = pixelChars[Math.floor(Math.random() * pixelChars.length)];
            
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
            snowflake.style.opacity = Math.random() * 0.5 + 0.3;
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            
            // Random color between blue and orange
            const colors = ['#00aaff', '#0088cc', '#ff6600', '#ff9900'];
            snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(snowflake);
            
            setTimeout(() => {
                snowflake.remove();
            }, 8000);
        }
        
        setInterval(createPixelSnow, 200);
        
        // Animate pixel characters
        const chars = document.querySelectorAll('.pixel-character');
        chars.forEach(char => {
            // Random movement
            let x = parseFloat(char.style.left || char.style.right);
            let y = parseFloat(char.style.top || char.style.bottom);
            let xDir = Math.random() > 0.5 ? 1 : -1;
            let yDir = Math.random() > 0.5 ? 1 : -1;
            let speed = Math.random() * 0.5 + 0.2;
            
            function moveChar() {
                let rect = char.getBoundingClientRect();
                
                // Bounce off edges
                if (rect.left <= 0 || rect.right >= window.innerWidth) {
                    xDir *= -1;
                }
                
                if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
                    yDir *= -1;
                }
                
                // Update position
                let currentLeft = parseFloat(char.style.left);
                let currentTop = parseFloat(char.style.top);
                
                char.style.left = (currentLeft + (xDir * speed)) + '%';
                char.style.top = (currentTop + (yDir * speed)) + '%';
                
                requestAnimationFrame(moveChar);
            }
            
            // Start animation
            setTimeout(moveChar, Math.random() * 1000);
        });
        
        // Add pixel click effect
        document.addEventListener('click', function(e) {
            const pixel = document.createElement('div');
            pixel.style.position = 'fixed';
            pixel.style.left = e.clientX + 'px';
            pixel.style.top = e.clientY + 'px';
            pixel.style.width = '20px';
            pixel.style.height = '20px';
            pixel.style.backgroundColor = Math.random() > 0.5 ? '#ff6600' : '#00aaff';
            pixel.style.zIndex = '1000';
            pixel.style.pointerEvents = 'none';
            pixel.style.boxShadow = '0 0 10px currentColor';
            document.body.appendChild(pixel);
            
            // Animate and remove
            setTimeout(() => {
                pixel.style.transform = 'scale(0)';
                pixel.style.opacity = '0';
                setTimeout(() => pixel.remove(), 300);
            }, 100);
        });
        
        // Add glitch effect to hero title on hover
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.addEventListener('mouseenter', function() {
            this.style.animation = 'pixel-glitch 0.3s 3';
        });
        
        heroTitle.addEventListener('animationend', function() {
            this.style.animation = '';
        });