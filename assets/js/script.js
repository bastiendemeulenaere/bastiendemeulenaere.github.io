// Matrix Background Effect
document.addEventListener('DOMContentLoaded', function() {
    // Check if matrix canvas exists on the current page
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Make canvas full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Characters to be used in the matrix
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
        const charArray = characters.split('');
        
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        
        // Array for drops - one per column
        const drops = [];
        
        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        // Drawing the matrix
        function drawMatrix() {
            // Set black, semi-transparent background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Set green color for the falling characters
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            // Loop over drops
            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                
                // x = i * fontSize, y = drops[i] * fontSize
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Send the drop back to the top randomly after it has crossed the screen
                // Add randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                // Increment y coordinate
                drops[i]++;
            }
        }
        
        // Run the animation
        setInterval(drawMatrix, 35);
        
        // Adjust canvas size when window is resized
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
});