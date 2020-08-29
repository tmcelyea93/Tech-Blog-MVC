async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title-input"]').value.trim();
    const content = document.querySelector('textarea[name="content-input"]').value;

    console.log(title);
    console.log(content);

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            contents: content
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#sub-btn').addEventListener('click', newPostHandler);