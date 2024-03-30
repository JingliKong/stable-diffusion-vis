document.getElementById('generateButton').addEventListener('click', function() {
    document.querySelectorAll('.container').forEach(function(container) {
        const prompt = container.querySelector('.promptInput').value;
        const imageGallery = container.querySelector('.imageGallery');
        fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
        })
        .then(response => response.json())
        .then(data => {
            imageGallery.innerHTML = ''; // Clear the gallery
            data.images.forEach(imageSrc => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.classList.add('image');
                imageGallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


document.getElementById('addRegionButton').addEventListener('click', function() {
    // Create a new container div
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');

    // Create a new textarea
    const newTextArea = document.createElement('textarea');
    newTextArea.classList.add('promptInput');
    newTextArea.placeholder = 'Enter your prompt here...';

    // Create a new image gallery div
    const newImageGallery = document.createElement('div');
    newImageGallery.classList.add('imageGallery');

    // Append the textarea and image gallery to the container
    newContainer.appendChild(newTextArea);
    newContainer.appendChild(newImageGallery);

    // Append the new container to the body (or to a specific parent element)
    document.body.appendChild(newContainer);
});
