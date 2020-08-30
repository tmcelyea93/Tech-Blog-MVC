async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title-input"]').value.trim();

    const contents = document.querySelector('textarea[name="content-input"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (title && contents) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                contents
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#edit-form').addEventListener('submit', editFormHandler); 