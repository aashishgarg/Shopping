import React from 'react';

const Loader = () => (
    <div>
        <div id='loader'>
            <div className="spinner"></div>
        </div>
        <script>
            window.addEventListener('load', function load() {
            const loader = document.getElementById('loader');
            setTimeout(function() {
            loader.classList.add('fadeOut');
        }, 300);
        });
        </script>
    </div>
);

export default Loader;
